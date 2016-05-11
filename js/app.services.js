(function(){
  'use strict';
  angular
    .module('portfolio')
    .factory('PortfolioService', PortfolioService);

    PortfolioService.$inject = ['$log'];

    function PortfolioService($log){
      var service = {};
      $log.info("Service here!");
      return service;
    }
})();
