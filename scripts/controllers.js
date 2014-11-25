'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
.controller('MyCtrl1', [function () {

}])
.controller('MyCtrl2', [function () {

}])
.controller('NotificationCtrl', ['$scope', 'NotificationService', function ($scope, NotificationService) {
    $scope.callbackMessage = 'init';

    $scope.alertNotify = function () {
        $scope.callbackMessage = 'alert';
        NotificationService.alert("Sample Alert", function () { $scope.callbackMessage = "You clicked Alert!" }, "My Alert", "Close");
    };

    $scope.beepNotify = function () {
        $scope.callbackMessage = 'beep';
        NotificationService.beep(1);
    };

    $scope.vibrateNotify = function () {
        $scope.callbackMessage = 'vibrate';
        NotificationService.vibrate(3000);
    };

    $scope.confirmNotify = function () {
        $scope.callbackMessage = 'Are you sure?';
        NotificationService.confirm("My Confirmation", function () { $scope.callbackMessage = "You clicked Confirmation!" }, "Are you sure?", ["Ok", "Cancel"]);
    };
}])
;
