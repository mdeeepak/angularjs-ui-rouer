var app = angular.module('app',['ui.router']);
app.config(['$stateProvider', function($stateProvider){
$stateProvider
.state('root',{
    url:'/',
    template:'<strong>Root page.. click something from left menu</strong>'
})
.state('otherwise',{
    url:'*path',
    template:'<strong>No route available</strong>'
})
}]);