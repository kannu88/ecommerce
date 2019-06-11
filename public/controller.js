var mainApp = angular.module('mainApp',['ngRoute']);
mainApp.config(['$routeProvider',function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'dashboard.html',
        controller:'dashboardController'
    })
    .otherwise({
        redirectTo:'/'
    })
}])
mainApp.controller('dashboardController',function($scope){
    $scope.msg="india";
    console.log($scope.msg);
})