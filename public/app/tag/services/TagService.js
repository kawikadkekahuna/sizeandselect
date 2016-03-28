(function () {
    "use strict";

    function TagService ($http, $state) {

        this.addTag = function (tagData) {
            return $http.post(SERVER + '/api/tags', tagData);
        };

        this.getTags = function (projectId) {
            return $http.get(SERVER + '/api/tags', {params: {projectId: projectId}});
        };

        this.getTagById = function (tagId) {
            return $http.get(SERVER + '/api/tags/' + tagId);
        };

        this.createTagSheet = function (tagData) {
            return $http.post(SERVER + '/api/tags/tag-sheet', tagData);
        };

        this.defaultValues = function () {
            var config = {
                ATM_PRESSURE: 14.696,
                COMPRESSIBILITY: 1,
                RUPTURE_DISC: 1
            };

            return config;
        };
    }

    angular.module('app')
        .service('TagService', ['$http', '$state', TagService]);
}());