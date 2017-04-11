(function(){
  'use strict';
  angular
    .module('portfolio')
    .controller('MainController', MainController);

    MainController.$inject = ["$log", "$mdSidenav"];
    function MainController($log, $mdSidenav){
      var vm = this;

      vm.openSidenav = function(){
        $mdSidenav('left').open();
      };

      vm.closeSidenav = function(){
        $mdSidenav('left').close();
      };
    };
})();
