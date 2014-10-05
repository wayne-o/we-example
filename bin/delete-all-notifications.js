var Sails = require('sails');

function loadSails(cb){
  Sails.load({
    port: 1930,
    hooks: {
      grunt: false,
      pubsub: false
    }
  },function(err, sails) {
  if (err) {
    return cb(err);
  }
    // here you can load fixtures, etc.
    cb(err, sails);
  });
}

function destroyAll() {
  var Notification = sails.models['notification'];
  return Notification.destroy();
}

function init() {
  loadSails(function(){
    destroyAll()
    .then(function(result){
      sails.log.info('result: ',result);

      doneAll()
    });
  })
}

function doneAll(){
  sails.load();
  // end / exit
  process.exit();
}

init();