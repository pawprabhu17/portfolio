$('a.active').click(function(e){    
    e.preventDefault();

});

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});

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

