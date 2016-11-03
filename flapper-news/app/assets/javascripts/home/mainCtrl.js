angular.module('flapperNews', ['ui.router'])
.controller('MainCtrl', ['$scope', 'posts', function($scope, posts){
  	$scope.posts = posts.posts;
  	
	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') { return; }
		$scope.posts.push({ 
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0, 
			downvotes: 0
		 });
		$scope.title = '';
		$scope.link = '';
	};

	$scope.posts.push({
		title: $scope.title,
		link: $scope.link,
		upvotes: 0,
		comments: [
		  {author: 'Joe', body: 'Cool post!', upvotes: 0},
		  {author: 'Bob', body: 'Great idea but everything is wrong!', upvotes: 0}
		]
	});

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
	$scope.incrementDownvotes = function(post) {
		post.downvotes += 1;
	};
}]);
