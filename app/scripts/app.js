blocItOff = angular.module('BlocItOff', ['ui.router', 'firebase']);

blocItOff.config(['$stateProvider', '$locationProvider', function($stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    //  Main view
    $stateProvider.state('main', {
        url: '/',
        controller: 'Main.controller',
        templateUrl: '/templates/home.html'
    });

}]);

blocItOff.controller('Main.controller', ['$scope', function($scope) {
    console.log('main view loaded');
}]);