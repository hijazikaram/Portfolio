angular.module("myPortfolio", []).service("mainService", function($http){

  this.sendEmail = function (email)  {
        return $http({
            method: "POST",
            url: "/api/email",
            data: email
        }).then(function(response)  {
            return response.data;
        });
    };
});
