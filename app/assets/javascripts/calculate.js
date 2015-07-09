angular.module('waitstaff',['ngMessages'])
  .controller('WaitStaffCtrl', function($scope){
  var count = 0
  $scope.calcsub = function(price,tax){
    $scope.sub = price + price*tax/100
    return $scope.sub;
  };
  $scope.calctip = function(price,tip){
    $scope.tiptot = price*tip/100
    return $scope.tiptot;
  };
  $scope.calctot = function(price,tip,tax){
      return ( price + price*tax/100) + (price*tip/100);
  }

  $scope.count = 0;
  $scope.runningtip = 0;
  $scope.averagetip =0;
  $scope.submit = function(){
    
    if($scope.mealdet.$valid){
      $scope.runningtip = $scope.runningtip + $scope.tiptot
      $scope.count = $scope.count + 1
      $scope.averagetip = $scope.runningtip/$scope.count
      
//       $scope.runningtip = 
      console.log("Valid")
    }
    else{
      console.log("Invalid")
    }
    
    
  }
});