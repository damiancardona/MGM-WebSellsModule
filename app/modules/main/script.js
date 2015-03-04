var app = angular.module("app", ["ui.router"]);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/app");

		$stateProvider
			.state("app", {
				url: "/app",
				views: {
					"pageView": {
						templateUrl: "modules/main/partials/index.html",
						controller: "MainController as main"
					}
				}
			})

			.state("login", {
				url: "/login",
				views: {
					"pageView": {
						templateUrl: "modules/main/partials/login.html",
						controller: "MainController as main"
					}
				}
			})

	}
]);