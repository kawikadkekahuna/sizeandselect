angular.module('app')

.service('RegexService',['$http',RegexService])

function RegexService () {

  this.getEmail = function (){
    var regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex;
  };

  this.getPhoneNumber = function () {
    var regex = '^([0-9]( |-)?)?(\\(?[0-9]{3}\\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$';
    return regex;
  }

  this.getZipcode = function () {
    var regex = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    return regex;
  }


}