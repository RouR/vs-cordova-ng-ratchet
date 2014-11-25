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
.controller('testData1Ctrl', ['$scope', function ($scope) {
    $scope.performances = [
		{ "title": "Dolphins local", "club": "Mystika" },
		{ "title": "Bees", "club": "LDF" },
		{ "title": "Mushrooms", "club": "Dance Act" }
    ];
}])
.controller('testData2Ctrl', ['$scope', 'NotificationService', '$http', function ($scope, NotificationService, $http) {    
    $scope.performances = [];

    //Ripple emulator: Expand the Settings panel, Set option for the Cross Origin Proxy = Remote
    var responsePromise = $http({ method: 'GET', url: 'http://pastebin.com/raw.php?i=WV9znMFU' });
    responsePromise.success(function (data, status, headers, config) {
        $scope.performances = data;
    });
    responsePromise.error(function (data, status, headers, config) {
        NotificationService.alert("AJAX fail", function () {}, "Alert", "Close");
    });
}])
;
