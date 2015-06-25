'use strict';

angular.module('linkBuilder')
	.factory('Auth', function($firebaseAuth,$firebaseObject, FirebaseUrl) {
		var ref = new Firebase(FirebaseUrl);

		var auth = $firebaseAuth(ref);
		return auth;
	});