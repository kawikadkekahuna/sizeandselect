angular.module('app')

.controller('TagController', function ($scope, $stateParams, $state, TagService, DropdownService, DataCalculationService) {
    $scope.init = function (){
        loadEventHandlers($scope, $stateParams, $state, TagService, DropdownService);
    };

    $scope.tagAnalytics = {
        mediaType: '',
        media: '',
        molecularWeight: '',
        specificHeat: '',
        compressibility: ''
    };

    $scope.$watch('tagAnalytics.media', function (val) {

        if($scope.UNITS){
            const media = _.filter($scope.UNITS.MEDIA, function (unit){
            return unit.name === val;
        })[0];

        if (media) {
        /*
        Calculate specific heat based on k factor function.  attach to :
        '$scope.tagAnalytics.specificHeat'
         */
            $scope.tagAnalytics.molecularWeight = media.molecular_weight;
            $scope.tagAnalytics.compressibility = media.compressibility || 'N/A';
            $scope.tagAnalytics.specificHeat = media.specificHeat || 'N/A';
            $scope.tagAnalytics.specificGravity = media.specificGravity || 'N/A';

        } else {
            $scope.tagAnalytics.molecularWeight = 0;
            $scope.tagAnalytics.compressibility = 0;
        }
    }
  });

  $scope.$watch('tagAnalytics.viscosityUnit', function (unit){
    console.log('unit',unit);
  });

  $scope.processTagInputData = function(tagInputData) {

        // Crunch all the numbers..
        const tagCalculationOutputs = DataCalculationService.processDataInputs(tagInputData);
        $scope.tagCalculationOutputs = tagCalculationOutputs;

        console.log("tagCalculationOutputs", tagCalculationOutputs);
        // Create a tagSheet
        TagService.createTagSheet(tagCalculationOutputs);


    // Forward them to the next page
    $state.go('project.tag.selection-sheet');
  };
});


function suggest_media(term) {
    const q = term.toLowerCase().trim();
    const results = [];

  // Find first 10 medias that start with `term`.
    for (const i = 0; i < medias.length && results.length < 10; i++) {
        const media = medias[i].name;
        if (media.toLowerCase().indexOf(q) === 0) {
            results.push({ label: media, value: media });
        }
    };
    return results;
};

function loadEventHandlers($scope, $stateParams, $state, TagService, DropdownService){
    const tagId = $stateParams.tagId;

    TagService.getTagById(tagId).then(function (tag) {
        $scope.tag = tag;
    });

    DropdownService.getAnalyticUnits().then(function (units) {
        $scope.UNITS = units.data;
        console.log('$scope.UNITS',$scope.UNITS);
        const medias = $scope.UNITS.MEDIA;

        $scope.autocomplete_options = {
            suggest: suggest_media
        };
    });

    $scope.TAG_DEFAULT_VALUES = TagService.defaultValues();
};