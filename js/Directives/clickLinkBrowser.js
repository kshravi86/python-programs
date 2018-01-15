App.directive('clickLinkBrowser', [
    function () {
        return {
            link: function (scope, element, attrs) {
                attrs.$observe('clickLinkBrowser', function (value) {
                    element.bind('click', function () {
                        if (!element.hasClass('disabled'))
                            window.open(attrs.clickLinkBrowser, '_system');
                    })
                })
            }
        }
    }
]);