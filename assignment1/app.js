(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = [];
  $scope.total = 0;

  $scope.totalthing = function(){

  	for(count=0;count<&scope.name.length;count++){
  		totalthingValue = $scope.name[i];
  	}
  	return totalthingValue;
  	 $scope.total=  totalthingValue;
  	 if ($scope.total<3)
  	return Enjoy!;
  else  ($scope.total>3)
  	return Too much;
 
  };
 
};
}

})();

 
 