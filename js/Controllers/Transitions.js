App.controller('Transitions', ['$scope', function ($scope) {
    var transitClass = 'transit';
    $scope.elToTransitClass = '';
    $scope.triggerTransit = function () {
        if ($scope.elToTransitClass !== transitClass) {
            $scope.elToTransitClass = transitClass;
        } else {
            $scope.elToTransitClass = '';
        }
    }
}
]);