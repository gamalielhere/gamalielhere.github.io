(function(){
  'use strict';
  angular
    .module('portfolio',["ui.router", "ngMaterial"])
    .config(function($mdThemingProvider){
      var blackPrimary = {
        '50': '#404040',
        '100': '#333333',
        '200': '#262626',
        '300': '#1a1a1a',
        '400': '#0d0d0d',
        '500': '#000',
        '600': '#000000',
        '700': '#000000',
        '800': '#000000',
        '900': '#000000',
        'A100': '#4d4d4d',
        'A200': '#595959',
        'A400': '#666666',
        'A700': '#000000'
      };

      var whiteAccent = {
        '50': '#b3b3b3',
        '100': '#bfbfbf',
        '200': '#cccccc',
        '300': '#d9d9d9',
        '400': '#e6e6e6',
        '500': '#f2f2f2',
        '600': '#ffffff',
        '700': '#ffffff',
        '800': '#ffffff',
        '900': '#ffffff',
        'A100': '#ffffff',
        'A200': '#fff',
        'A400': '#f2f2f2',
        'A700': '#ffffff'
      };

      var redWarn = {
        '50': '#ff6666',
        '100': '#ff4d4d',
        '200': '#ff3333',
        '300': '#ff1a1a',
        '400': '#ff0000',
        '500': '#e60000',
        '600': '#cc0000',
        '700': '#b30000',
        '800': '#990000',
        '900': '#800000',
        'A100': '#ff8080',
        'A200': '#ff9999',
        'A400': '#ffb3b3',
        'A700': '#660000'
      };

      $mdThemingProvider.definePalette('blackPrimary', blackPrimary);
      $mdThemingProvider.definePalette('whiteAccent', whiteAccent);
      $mdThemingProvider.definePalette('redWarn', redWarn);
      $mdThemingProvider.theme('default')
        .primaryPalette("blackPrimary")
        .accentPalette("whiteAccent")
        .warnPalette("redWarn");
    });
})();
