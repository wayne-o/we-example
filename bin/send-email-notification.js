var Sails = require('sails'),
  _ = require('lodash'),
  weSendEmail = require('we-send-email'),
  WP = require('we-plugin'),
  WN = require('we-plugin-notification'),
  async = require('async'),
  site,
  sails;

var cwd = process.cwd();
var defaultEmailTemplateDir = cwd + '/node_modules/we-plugin-notification/templates/email';

function loadSails(cb){
  Sails.load( WP.getDefaultSailsConfigForCLI() ,function(err, s) {
  if (err) {
    return cb(err);
  }

  sails = s;

  // here you can load fixtures, etc.
  cb(err, sails);
  });
}

function getNotificationsToSendNotifications(cb) {

  var Notification = sails.models['notification'];

  var sql = 'SELECT n.*, u.displayName, u.emailNotificationFrequency, u.username, u.email, u.id as userId, n.id as id FROM notification AS n JOIN user u ON n.user = u.idInProvider WHERE n.`notified`=false and n.`read`=false';
  Notification.query(sql, cb)
}

function init() {
  loadSails(function(){
    getNotificationsToSendNotifications(function(err, notifications) {
      if( err ) {
        return sails.log.error('getNotificationsToSendNotifications: Error on get notifications from server',err);
      }

      if( !notifications ) {
        sails.log.info('Dont have notifications to send');
        // dont have notifications to send
        return;
      }

      sails.log.info('found notifications: ', 'total:' + notifications.length)
      // for each notification ...

      var usersToReceive = {};

      for (var i = notifications.length - 1; i >= 0; i--) {
        // group notifications by user id
        if (!usersToReceive[notifications[i].user] ) {
          usersToReceive[notifications[i].user] = {
            user: {
              username: notifications[i].displayName,
              displayName: notifications[i].displayName,
              email: notifications[i].email,
              locale: notifications[i].language
            },
            notifications: []
          };
        }

        notifications[i].emailLink = WN.format.link(notifications[i], sails);
        notifications[i].emailText = WN.format.email(notifications[i], sails);
        notifications[i].emailNoHTML = WN.format.emailNoHTML(notifications[i], sails);

        usersToReceive[notifications[i].user].notifications.push(notifications[i]);
      }

      site = {
        name: sails.config.appName
      }

      var userIds = Object.keys(usersToReceive);
      async.each(userIds, function(userId, next){
        sendNotification(
          usersToReceive[userId].user,
          usersToReceive[userId].notifications,
          next
        );
      },function (err) {
        if (err) {
          sails.log.error('Error on send notification emails', err );
        }
        doneAll();
      })

    })
  })
}

function sendNotification(user, notifications, cb) {
  var options = {
    subject: WN.format.emailSubject(user, sails),
    email: user.email
  }

  weSendEmail.sendEmail(options ,'userNotifications' ,{
    notifications: notifications,
    user: user,
    site: site
  }, function (err, responseStatus){
    sails.log.info('email send>>', err, responseStatus);
    cb();
  },
  defaultEmailTemplateDir);
}


function doneAll(){
  sails.load();
  // end / exit
  process.exit();
}

init();
