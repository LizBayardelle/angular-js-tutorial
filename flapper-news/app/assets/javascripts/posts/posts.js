angular.module('flapperNews', ['ui.router'])
.factory('posts', [function(){
	var o = {
    	posts: []
	};
  	return o;
}])
