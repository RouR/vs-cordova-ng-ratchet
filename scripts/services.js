'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', [])
.value('version', '0.1')
.factory('NotificationService', function ($rootScope) {
    //http://tech.pro/tutorial/1349/phonegap-and-angularjs-notification-service
    return {
        alert: function (message, alertCallback, title, buttonName) {
            navigator.notification.alert(message, function () {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function () {
                    alertCallback.apply(that, args);
                });
            }, title, buttonName);
        },
        confirm: function (message, confirmCallback, title, buttonLabels) {
            navigator.notification.confirm(message, function () {
                var that = this,
                    args = arguments;

                $rootScope.$apply(function () {
                    confirmCallback.apply(that, args);
                });
            }, title, buttonLabels);
        },
        beep: function (times) {
            navigator.notification.beep(times);
        },
        vibrate: function (milliseconds) {
            navigator.notification.vibrate(milliseconds);
        }
    };
})
.factory('StorageService', function () {
    return {
        set: function (name, value) {
            window.localStorage.setItem(name, value);
        },
        get: function (name) {
            return window.localStorage.getItem(name);
        },
        del: function(name) {
            window.localStorage.removeItem(name);
        }
    };
});
;