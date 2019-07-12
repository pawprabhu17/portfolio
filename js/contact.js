
var app=angular.module('myApp',[]);

app.controller('myController',function ($scope,$http){    
    $scope.postData = function(){
        $http.post(
            "insert.php",
            {
                'name': $scope.name,
                'email': $scope.email,
                'phone': $scope.phone,
                'feedbacks': $scope.feedbacks,
            }
        ).success(function(data){
            alert(data);
        });
    }    
         
    });


/*$scope.postData=function(){          
                 var request=$http({
                 method:"post",
                 url: window.location.href+ "contact.php",
                 data: {
                    name: $scope.name,
                    email: $scope.email,
                    phone: $scope.phone,
                    feedbacks: $scope.feedbacks,
                },
                headers: { 'Content-Type': 'multipart/form-data' }
            });
}*/