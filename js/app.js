/// <reference path="../bower_components/angular/angular.js" />
/// <reference path="../bower_components/angular-animate/angular-animate.js" />
/// <reference path="../bower_components/firebase/firebase.js" />
/// <reference path="controllers.js" />
/// <reference path="directives.js" />
/// <reference path="services.js" />

var app = angular.module('ForumApp', ['firebase', 'ngRoute', 'ngMaterial', 'ngAnimate']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'vm'
		})
		
		.when('/account', {
			templateUrl: 'views/account.html',
			controller: 'AccountController',
			controllerAs: 'vm'
		})
		
		.when('/login', {
			templateUrl: 'views/login.html',
			controller: 'LoginController',
			controllerAs: 'vm'
		})
		
		.when('/topics', {
			templateUrl: 'views/topics.html',
			controller: 'TopicController',
			controllerAs: 'vm'
		})
		
		.when('/thread', {
			templateUrl: 'views/thread.html',
			controller: 'ThreadController',
			controllerAs: 'vm'
		})
		
		.when('/messages', {
			templateUrl: 'views/messages.html',
			controller: 'MessagesController',
			controllerAs: 'vm'
		})
		
		.when('/new-message', {
			templateUrl: 'views/new-message.html',
			controller: 'AddPostController',
			controllerAs: 'vm'
		})
		
		.when('/new-thread', {
			templateUrl: 'views/new-thread.html',
			controller: 'AddThreadController',
			controllerAs: 'vm'
		})
		
		.otherwise({
			redirectTo: '/'
		})
		
	// $locationProvider.html5Mode({
	// 	enabled: true,
	// 	requireBase: true
	// })
}]);

// app.animation('.toggle-fade', [function() {
// 	return {
// 		enter: function(element, doneFn) {
// 			jQuery(element).fadeIn(500, doneFn);
// 			setTimeout(function() {
// 				this.leave;
// 			}, 5000);
// 		},
// 		leave: function(element, doneFn) {
// 			jQuery(element).fadeOut(500, doneFn);
// 		}
// 	}
// }]);