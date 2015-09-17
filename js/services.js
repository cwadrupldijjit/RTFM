/* global Firebase */
/* global angular */
var app = angular.module('ForumApp');

app.service('firebasePaths', ['$firebaseAuth', function($firebaseAuth) {
	var serv = this;
	
	serv.ref = new Firebase('https://angular-fire-rtfm-d.firebaseio.com/rtfm');
	
	serv.AUTH = $firebaseAuth(serv.ref);
}])