angular.module("myPortfolio").controller('mainCtrl', function($scope, mainService){
  $scope.sendEmail = function(email) {
      mainService.sendEmail({
          toField: $scope.email.toField,
          subjectField: $scope.email.subjectField,
          textField: $scope.email.textField
      }).then(function(response) {
          clear2();
      });
  };

  var clear2 = function() {
      $scope.email = null;
      return alert("email received!");
  };
});
