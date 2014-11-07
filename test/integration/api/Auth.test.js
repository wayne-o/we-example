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

describe('Auth', function() {
  var user;
  // before all create one user stub
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

  describe('UnAuthenticated', function() {
    describe('JSON Requests', function() {
      describe('POST', function() {

        it('/auth/login should login user and returns logged in user object', function (done) {
          var agent = request.agent(sails.hooks.http.app);

          agent.post('/auth/login')
          .send({
            email: user.email,
            password: user.password
          })
          .expect(200)
          .end(function(err, res) {
            if(err) return done(err);

            assert.ok(res.body);
            assert.ok(res.body.id);
            assert.equal(res.body.username, user.username);
            assert.equal(res.body.displayName, user.displayName);
            assert.equal(res.body.id, user.id);

            // do a seccond request to ensures how user is logged in
            agent.get('/account')
            .expect(200)
            .end(function(err, res) {
              if(err) return done(err);

              assert.ok(res.body);
              assert.ok(res.body.user);
              assert.equal(res.body.user.username, user.username);
              assert.equal(res.body.user.displayName, user.displayName);
              assert.equal(res.body.user.id, user.id);

              done();
            });
          });

        });

      })

    })


  })
});
