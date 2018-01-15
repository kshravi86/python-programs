App.controller('Cube', ['$scope', function ($scope) {
    $scope.cubeCount = [0];
    $scope.addCube = function() {
        $scope.cubeCount.push($scope.cubeCount.length);
    }
}
]);