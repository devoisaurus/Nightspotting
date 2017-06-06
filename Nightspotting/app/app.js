(function () {
    angular.module("nightspotting", ["ngRoute"]);

    angular.module("nightspotting")
        .controller("homeController", ["$scope", function ($scope) {
            $scope.welcome = "Boop";
        }]);

    //minified
    angular.module("nightspotting")
        .controller("mainController", mainController);

    mainController.$inject = ["$scope"];

    function mainController($scope) {

    }
})();