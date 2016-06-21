'use strict';

var NotificationHandler = require('../../src/js/framework/watchNotificationHandler'),
  Notifications = require('../../src/js/framework/watchNotification');

describe('NotificationHandler', function() {

  var notificationHandler;

  beforeEach(function() {
    notificationHandler = new NotificationHandler();
    setFixtures('<div id="watch-face" />');
  });

  describe('The Constuctor', function() {
    it('should load notifications passed via the constructor', function() {
      var notifications = {
        foo: {a: 1},
        bar: {b:2},
        baz: {c: 3}
      };
      notificationHandler = new NotificationHandler(notifications);
      expect(notificationHandler.notifications).toEqual(notifications);
    });
  });

  describe('loadNotifications', function() {
    var notifications = {
      foo: {a: 1},
      bar: {b:2},
      baz: {c: 3}
    };

    it('should register each notification', function() {
      notificationHandler.loadNotifications(notifications);
      expect(notificationHandler.notifications).toEqual(notifications);
    });
  });

  describe('Displaying notifications', function() {

    describe('when a valid notification is triggered', function() {
      var testNotification;
      beforeEach(function() {
        testNotification = Notifications.extend({});
        notificationHandler.notifications = {};
        notificationHandler.loadNotifications({testNotification: testNotification});
      });

      it('should display the notification', function() {
        notificationHandler.showNotification({
          type:'testNotification',
          message: 'test notification message'
        });
        expect($('#watch-face .notification').html()).toContainText('test notification message');
      });

    });
  });

});
