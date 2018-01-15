App.directive('dropdownButton', [function () {
    return {
        link: function(scope, element, attrs) {
            var elem = angular.element(element),
                button = Hammer(elem.find('.button')[0]);
            button.on('tap', function() {
                elem.toggleClass('closed')
            });
        }
    }
}
]);