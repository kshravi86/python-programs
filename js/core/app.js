var App = angular.module('App', ['ngRoute', 'angular-gestures']);

App.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'templates/Home.html'
        }).when("/keyframes84",{templateUrl:'templates/keyframes84.html'}).when("/keyframes36", {
            templateUrl: 'templates/keyframes36.html',
           
        }).when("/keyframes81",{templateUrl:'templates/keyframes81.html'}).when("/keyframes78",{templateUrl:'templates/keyframes78.html'}).when("/keyframes75",{templateUrl:'templates/keyframes75.html'}).when("/keyframes72",{templateUrl:'templates/keyframes72.html'}).when("/keyframes42",{templateUrl:'templates/keyframes42.html'}).when("/keyframes33", {
            templateUrl: 'templates/keyframes33.html'
        }).when("/keyframes66",{templateUrl:'templates/keyframes66.html'}).when("/keyframes63",{templateUrl:'templates/keyframes63.html'}).when("/keyframes12", {
            templateUrl: 'templates/keyframes12.html'
        }).when("/keyframes9", {
            templateUrl: 'templates/keyframes9.html'
        }).when("keyframes99",{templateUrl:'templates/keyframes99.html'}).when("/keyframes", {
            templateUrl: 'templates/Keyframes.html'
        }).when("/keyframes69",{templateUrl:'templates/keyframes69.html'}).when("/keyframes3", {
            templateUrl: 'templates/keyframes3.html',
            controller: 'Transitions'
        }).when("/keyframes15", {
            templateUrl: 'templates/keyframes15.html'
        }).when("/keyframes87",{templateUrl:'templates/keyframes87.html'}).when("/keyframes57",{templateUrl:'templates/keyframes57.html'}).when("/keyframes18", {
            templateUrl: 'templates/keyframes18.html'
        }).when("/keyframes24", {
            templateUrl: 'templates/keyframes24.html'
        }).when("/keyframes181",{templateUrl:'templates/keyframes181.html'}).when("/keyframes178",{templateUrl:'templates/keyframes178.html'}).when("/keyframes175",{templateUrl:'templates/keyframes175.html'}).when("/keyframes172",{templateUrl:'templates/keyframes172.html'}).when("/keyframes169",{templateUrl:'templates/keyframes169.html'}).when("/keyframes166",{templateUrl:'templates/keyframes166.html'}).when("/keyframes163",{templateUrl:'templates/keyframes163.html'}).when("/keyframes160",{templateUrl:'templates/keyframes160.html'}).when("/keyframes157",{templateUrl:'templates/keyframes157.html'}).when("/keyframes154",{templateUrl:'templates/keyframes154.html'}).when("/keyframes151",{templateUrl:'templates/keyframes151.html'}).when("/keyframes148",{templateUrl:'templates/keyframes148.html'}).when("/keyframes145",{templateUrl:'templates/keyframes145.html'}).when("/keyframes142",{templateUrl:'templates/keyframes142.html'}).when("/keyframes139",{templateUrl:'templates/keyframes139.html'}).when("/keyframes136",{templateUrl:'templates/keyframes136.html'}).when("/keyframes133",{templateUrl:'templates/keyframes133.html'}).when("/keyframes133",{templateUrl:'templates/keyframes133.html'}).when("/keyframes130",{templateUrl:'templates/keyframes130.html'}).when("/keyframes127",{templateUrl:'templates/keyframes127.html'}).when("/keyframes124",{templateUrl:"templates/keyframes124.html"}).when("/keyframes121",{templateUrl:'templates/keyframes121.html'}).when("/keyframes118",{templateUrl:"templates/keyframes118.html"}).when("/keyframes102",{templateUrl:'templates/keyframes102.html'}).when("/keyframes96",{templateUrl:'templates/keyframes96.html'}).when("/keyframes93",{templateUrl:'templates/keyframes93.html'}).when("/keyframes90",{templateUrl:'templates/keyframes90.html'}).when("/keyframes60",{templateUrl:'templates/keyframes60.html'}).when("/keyframes51",{templateUrl:'templates/keyframes51.html'})
		.when("/keyframes27", {
            templateUrl: 'templates/keyframes27.html'
        }).when("/keyframes115",{templateUrl:'templates/keyframes115.html'}).when("/keyframes105",{templateUrl:'templates/keyframes105.html'}).when("/keyframes54",{templateUrl:'templates/keyframes54.html'}).when("/keyframes30", {
            templateUrl: 'templates/keyframes30.html'
        }).when("/keyframes45",{templateUrl:'templates/keyframes45.html'
		}).when("/keyframes112",{templateUrl:'templates/keyframes112.html'}).when("/keyframes108",{templateUrl:'templates/keyframes108.html'}).when("/keyframes48",{templateUrl:'templates/keyframes48.html'}).when("/keyframes39",{templateUrl:'templates/keyframes39.html'}).
		otherwise({
            redirectTo: '/'
        });

}
]);
