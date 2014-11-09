var request = require('supertest');
var crypto = require('crypto');
var assert = require('assert');
var async = require('async');

//var sinon   = require('sinon');
//var uuid = require('node-uuid');

var userStub = function() {
  var randString = crypto.randomBytes(20).toString('hex');
  return {
    username: randString.slice(0,15),
    biography:  randString + ' is a auto generated user!',
    email:  randString + '@albertosouza.net',
    password: '123',
    displayName: 'Afro Samuray',
    language: 'pt-br'
  }
}

var categoryStub = function(userId, vocabularyId) {
  return [{
    text: 'Saúde',
    creator: userId,
    vocabulary: vocabularyId
  },
  {
    text: 'Educação',
    creator: userId,
    vocabulary: vocabularyId
  }]
}

var tagStub = function(userId) {
  return [{
    text: 'test',
    creator: userId
  },
  {
    text: 'Educação',
    creator: userId
  }]
}

function postStub () {
  return {
    'body': 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos',
    'creator': 1
  };
}

describe('Post', function() {
  var user;
  // after all create one user stub
  before(function(done) {

    async.series([
      function createUser(done) {
        var uStub = userStub();
        var password = uStub.password;
        User.create(uStub)
        .exec( function(err, u){
          if( err ) {
            console.log(err);
            return done(err);
          }

          user = u;
          user.password = password;
          done();
        })
      }
    ], function(err){
      if (err) {
        console.error('Error on create stub data', err);
        return done(err);
      }

      done();
    });
  })

  // JSON Authenticated REQUESTS  //
  describe('Authenticated', function() {

    var agent;

    // after authenticated requests login the user
    before(function(done) {

      agent = request.agent(sails.hooks.http.app);

      agent.post('/auth/login')
      .send({
        email: user.email,
        password: user.password
      })
      .expect(200)
      .end(function(err) {
        done(err);
      });
    })

    describe('JSON Requests', function() {
      describe('POST', function() {
        it('/post should create one post and return 201 with the post created', function (done) {

          var record = postStub();

          agent.post('/post')
          .set('Accept', 'application/json')
          //.set('X-CSRF-Token', testCsrfToken)
          .send( record )
          .expect('Content-Type', /json/)

          .end(function (err, res) {
            if(err) return done(err);

            assert.ok(res.body);
            assert.ok(res.body.post);
            assert.ok(res.body.post.id);

            assert.equal(record.body, res.body.post.body);

            done();
          });

        });
      });

      describe('PUT', function() {
        it('/post should update one post and return 200', function (done) {

          var record = postStub();
          record.creator = user.id;

          // after create one post record
          Post.create(record).exec(function(err, postSalved) {
            if(err) {
              console.log(err);
              return done(err);
            }
            assert.ok(postSalved);

            postSalved.body = 'changed body';

            agent.put('/post/' + postSalved.id )
            .set('Accept', 'application/json')
            //.set('X-CSRF-Token', testCsrfToken)
            .send( postSalved )
            .expect(200)
            .expect('Content-Type', /json/)
            .end(function (err, res) {
              if(err) return done(err);

              assert.ok(res.body);
              assert.ok(res.body.post);
              assert.ok(res.body.post.id);

              assert.equal(postSalved.body, res.body.post.body);

              done();
            });
          })

        });
      });
    });
  });
});
