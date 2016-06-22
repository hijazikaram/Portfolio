angular.module("myPortfolio", []).service("mainService", function($http){

  this.sendEmail = function (email)  {
        return $http({
            method: "POST",
            url: "/email",
            data: email
        }).then(function(response)  {
            return response.data;
        });
    };
});
