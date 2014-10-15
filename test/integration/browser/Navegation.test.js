var Browser = require('zombie');
var assert = require('assert');

var HOST = global.HOST;

// Load the page from localhost
var browser = new Browser();

describe('Browser', function() {
  describe('Navegation', function() {
    // start navegation with index page
    it('/ should load index page', function (done) {
      browser.visit(HOST+'/', function (e) {
        if (e) {
          console.error(e);
          return done(e);
        }

        done();
      });
    });
  });

  after(function(done){
    browser.close();

    done();
  });
});