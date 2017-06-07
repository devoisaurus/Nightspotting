(function () {
    angular.module("nightspotting", ["ngRoute"]);

    angular.config([
        "$routeProvider", function($routeProvider) {
            $routeProvider
            .when("/",
                {
                    templateUrl: "~/Home/Login.html",
                    controller: "loginController"
                });


        }
    ]);
})();