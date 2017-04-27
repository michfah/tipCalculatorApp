(function() {
    
    var app = angular.module('tipApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'app/views/calculator.html',
                controller: 'calculatorController as calc'
            })
        });
    
}());
