App.directive('clickLink', ['$location',
    function ($location) {
        return {
            link: function (scope, element, attrs) {
                attrs.$observe('clickLink', function (value) {
                    Hammer(element[0]).on('tap', function () {
                        if (!element.hasClass('disabled')) {
                            scope.$apply(function () {
                                $location.path(attrs.clickLink)
                            })

                        }
                    })
                });
            }
        }
    }
]);