angular.module('app')

.controller('TagController', function ($scope, $stateParams, $state, TagService, DropdownService) {
  $scope.init = function (){
    var tagId = $stateParams.tagId;
    TagService.getTagById(tagId).then(function (tag){
      $scope.tag = tag
    });

    DropdownService.getAnalyticUnits().then(function (units){
      $scope.UNITS = units.data;
      $scope.tagAnalytics = {};

      var medias = $scope.UNITS.MEDIA;

      function suggest_media(term) {
        var q = term.toLowerCase().trim();
        var results = [];

        // Find first 10 medias that start with `term`.
        for (var i = 0; i < medias.length && results.length < 10; i++) {
          var media = medias[i].name;
          if (media.toLowerCase().indexOf(q) === 0)
            results.push({ label: media, value: media });
        }
        return results;
      }

      $scope.autocomplete_options = {
        suggest: suggest_media
      };
    });

    $scope.TAG_DEFAULT_VALUES = TagService.defaultValues();
    /**
     * @param  {callback}
     *  TODO:
     *  Rename callback to appropriate variable name.
     *  Not enough data to continue development.
     * @return {???}
     */
  };

  $scope.createTagAnalytics = TagService.createTagAnalytics();
});


