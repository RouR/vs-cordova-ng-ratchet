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
.controller('settingsCtrl', ['$scope', 'StorageService', function ($scope, StorageService) {
    console.log('settingsCtrl ');

    $scope.colors = [
      { name: 'black', shade: 'dark' },
      { name: 'white', shade: 'light' },
      { name: 'red', shade: 'dark' },
      { name: 'blue', shade: 'dark' },
      { name: 'yellow', shade: 'light' }
    ];


    var stored = JSON.parse(StorageService.get('n1'));
    if (stored != null) {
        for (var i = 0; i < $scope.colors.length; i++) 
            if ($scope.colors[i].name === stored.name) {
                $scope.myColor = $scope.colors[i];
                break;
        }
    }
    else
        $scope.myColor = $scope.colors[2];

    

    $scope.selectChange = function (value) {
        if (value == null) {
            return;
        }
        StorageService.set('n1', JSON.stringify(value));
    }
}])
;
