angular.module('ColourBrag', [
    'ngMaterial',
    'ui.router'
]);

angular.module('ColourBrag').run(function($log) {
    $log.debug("ColourBrag running...");
});
