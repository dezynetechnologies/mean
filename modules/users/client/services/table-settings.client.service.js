(function () {
    'use strict';
    angular
        .module('users')
        .factory('UserTableSettings', ['ngTableParams', '$filter', function (ngTableParams, $filter) {
            var getData = function (Entity, data) {
                return function ($defer, params) {
                    /*
                    Entity.get(params.url(), function (response) {
                        params.total(response.total);
                        $defer.resolve(response.results);
                    });*/
                    var filteredData = params.filter() ?
                        $filter('filter')(data, params.filter()) :
                        data;
                    var orderedData = params.sorting() ?
                        $filter('orderBy')(filteredData, params.orderBy()) :
                        data;

                    params.total(orderedData.length); // set total for recalc pagination
                    $defer.resolve(orderedData.slice((params.page() - 1) * params.count(), params.page() * params.count()));
                };
            };
            var params = {
                page: 1,
                count: 5,
                filter: {
                    username: 'M'
                },
                sorting: {
                    username: 'asc'
                }
            };
            var settings = {
                total: 0,
                counts: [5, 10, 15],
                filterDelay: 0
            };
            /* jshint ignore:start */
            var tableParams = new ngTableParams(params, settings);
            var getParams = function (Entity, data) {
                tableParams.settings({
                    getData: getData(Entity, data)
                });
                return tableParams;
            };
            var service = {
                getParams: getParams
            };
            return service;
            /* jshint ignore:end */
  }]);
})();