var linkBuilder = angular
	.module('linkBuilder', ['ui.router', 'firebase'])

	.config(function($stateProvider, $urlRouterProvider){
		$stateProvider
			.state('utmBuilder', {
				url: '/utm-builder',
				controller: 'utmController as utmctrl',
				templateUrl: 'pages/utm-builder.html'
			})
			.state('linkBuilder', {
				url: '/',
				controller: 'socialLinkController as slCtrl',
				templateUrl: 'pages/link-builder.html'
			})
			.state('login', {
				url: '/login',
				controller: 'authController as authctrl',
				templateUrl: 'pages/login.html',
				resolve: {
					requireNoAuth: function($state, Auth){
						return Auth.$requireAuth().then(function(auth){
							$state.go('linkBuilder');
						}, function(error) {
							return;
						});
					}
				}
			})
			.state('register', {
				url: '/register',
				controller: 'authController as authctrl',
				templateUrl: 'pages/register.html'
			});

	})
	
	.constant('FirebaseUrl', 'https://link-builder.firebaseio.com');

