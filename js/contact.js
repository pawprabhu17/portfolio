var app=angular.module('myapp',['ngRoute']);

    app.controller('mycontroller',function($scope,$http){
        $scope.submit=function(){
            console.log("Hey");
            var request=$http({
                method:"post",
                url: window.location.href + "/contact.php"
                data: {
                    name: $scope.name,
                    email: $scope.email,
                    phone: $scope.phone,
                    feedback: $scope.feedback,
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
        }
    });
