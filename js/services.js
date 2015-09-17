/* global Firebase */
/* global angular */
var app = angular.module('ForumApp');

app.service('fbPaths', ['$firebaseAuth', function($firebaseAuth) {
	var serv = this;
	serv.rootUrl = 'https://angular-fire-rtfm-d.firebaseio.com/rtfm/';
	serv.mainRef = new Firebase(serv.rootUrl);
	serv.topicsRef = new Firebase(serv.rootUrl + 'topics');
	console.log(serv.topicsRef);
	
	serv.AUTH = $firebaseAuth(serv.mainRef);
	console.log(serv.AUTH);
}])