var app = angular.module('ForumApp', ['firebase', 'ngRoute', 'ngMaterial']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html'
		})
		
		.when('/account', {
			templateUrl: 'views/account.html'
		})
		
		.when('/login', {
			templateUrl: 'views/login.html'
		})
		
		.when('/topics', {
			templateUrl: 'views/topics.html'
		})
		
		.when('/thread', {
			templateUrl: 'views/thread.html'
		})
		
		.when('/messages', {
			templateUrl: 'views/messages.html'
		})
		
		.otherwise({
			redirectTo: '/'
		})
		
	$locationProvider.html5Mode({
		enabled: true,
		requireBase: false
	})
}]);