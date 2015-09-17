var app = angular.module('ForumApp');




app.controller('HomeController', ['$firebaseArray', '$firebaseObject', 'fbPaths', function($firebaseArray, $firebaseObject, fbPaths) {
	var vm = this;
	
	
}]);




app.controller('ThreadController', ['$firebaseArray', '$firebaseObject', 'fbPaths', '$location', function($firebaseArray, $firebaseObject, fbPaths, $location) {
	var vm = this;
	
	
}]);




app.controller('TopicController', ['$firebaseArray', '$firebaseObject', 'fbPaths', '$location', function($firebaseArray, $firebaseObject, fbPaths, $location) {
	var vm = this;
	
	vm.topics = $firebaseArray(fbPaths.topicsRef);
	
	console.log(vm.topics);
	
	vm.createThread = function() {
		$location.path('/new-thread');
	}
}]);




app.controller('LoginController', ['$firebaseArray', '$firebaseObject', 'fbPaths', function($firebaseArray, $firebaseObject, fbPaths) {
	var vm = this;
	
	
}]);




app.controller('AccountController', ['$firebaseArray', '$firebaseObject', 'fbPaths', function($firebaseArray, $firebaseObject, fbPaths) {
	var vm = this;
	
	
}]);




app.controller('MessagesController', ['$firebaseArray', '$firebaseObject', 'fbPaths', function($firebaseArray, $firebaseObject, fbPaths) {
	var vm = this;
	
	
}]);




app.controller('AddPostController', ['$firebaseArray', '$firebaseObject', 'fbPaths', function($firebaseArray, $firebaseObject, fbPaths) {
	var vm = this;
	
	
}]);




app.controller('AddThreadController', ['$firebaseArray', '$firebaseObject', 'fbPaths', '$location', function($firebaseArray, $firebaseObject, fbPaths, $location) {
	var vm = this;
	
	vm.errorDisplay = false
	
	function displayError(message) {
		vm.errorMessage = message;
		vm.errorDisplay = true;
		
		// setTimeout(function() {
		// 	vm.errorDisplay = false;
		// 	console.log('retreated')
		// }, 8000);
	}
	
	vm.currentTopics = $firebaseArray(fbPaths.topicsRef);
	console.log(vm.currentTopics);
	
	vm.addThread = function() {
		if(vm.newThreadTitle && vm.newThreadContent) {
			var isFound = false;
			
			for (var i = 0; i < vm.currentTopics.length; i++) {
				
				if (angular.lowercase(vm.newThreadTitle) === angular.lowercase(vm.currentTopics[i].title)) {
					displayError('That title is already in use.  Consider changing it to something unique.');
					
					isFound = true;
					break;
				}
			}
			
			if(!isFound) {
				var postObj = {};
				
				postObj.createdBy = "Admin";
				postObj.createdAt = new Date();
				postObj.title = vm.newThreadTitle;
				postObj.content = vm.newThreadContent;
				
				vm.currentTopics.$add(postObj);
				
				$location.path('/topics')
			}
		} else {
			displayError('Fill the entire form out before you can post a topic');
		}
	}
}]);