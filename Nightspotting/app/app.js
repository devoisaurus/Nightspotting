(function () {
    angular.module("nightspotting", ["ngRoute"]);

    angular.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/",
                    {
                        templateUrl: "app/Login.html",
                        controller: "loginController"
                    });

        }
    ]);
})();