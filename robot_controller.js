/**
 * Robots Controller
 * @author Rupali Parab <rupalip.java@gmail.com.com>
 */

 (function() {

     "use strict";

     var rbApp = angular.module('robots', []);
     rbApp.controller('RobotsController', ['$scope', function($scope) {
          $scope.robotType = ["Flying Robot", "Wheeled Robot", "Walking Robot"];
          $scope.robotColor = ["Gold", "Silver", "Bronze"];
          $scope.robotTable = [];
          $scope.buildMyBot = function(type, color){

            $scope.robotTable.push({
              botType: type,
              botColor: color
            });

          }

          $scope.removeBot = function(botType,botColor,index){
            $scope.robotTable.splice(index, 1);
            if($scope.robotTable && $scope.robotTable.length <=0){
              $scope.type = null;
              $scope.color = null;
            }
          }
     }]);
}());
