angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/splash.html',
			controller: 'SplashController'
		})

		.when('/about', {
			templateUrl: 'views/about.html',
			controller: 'AboutController'
		})

		.when('/archive', {
			templateUrl: 'views/archive.html',
			controller: 'ArchiveController'	
		})

		.when('/prologue', {
			templateUrl: 'views/comic.html',
			controller: 'ComicController'
		})

		.when('/linx', {
			templateUrl: 'views/misc.html',
			controller: 'MiscController'	
		});

	$locationProvider.html5Mode(true);

}]);