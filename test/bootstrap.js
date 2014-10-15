/**
 * Test starter - with this version of sails.js we can only start one sails server,
 * to solve this problem we use only one before All and after All to start and
 * stop the server
 */
var Sails = require('sails');
var themeEngine = require('we-theme-engine');
var WP = require('we-plugin');
var _ = require('lodash')

global.DOMAIN = 'http://localhost';
global.PORT = 1420;
global.HOST = DOMAIN + ':' + PORT;

before(function(callback) {
  this.timeout(5000);

  var configs = WP.getDefaultSailsConfigForCLI();

  configs = _.merge(configs, {
    log: {
      level: 'warn'
    },
    connections: {
      memory: {
        adapter   : 'sails-memory'
      }
    },
    models: {
      connection: 'memory'
    },
    port: PORT,
    environment: 'test',
    // @TODO needs suport to csrf token
    csrf: false,
    hooks: {
      grunt: false,
      pubsub: false
    },
    paths: {
      'views':  themeEngine.getThemeSailsTemplatesFolder(),
      'layout': themeEngine.getThemeLayout(),
      'fallbackEmailTemplateFolder': __dirname + '/node_modules/wejs-theme-default/templates/email'
    }
  });

  Sails.lift(configs, function(err, sails) {
    if (err) {
      return callback(err);
    }
    // here you can load fixtures, etc.
    callback(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});