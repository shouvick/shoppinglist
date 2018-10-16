var app = angular.module('mod',[]);

app.controller('my_const',function($scope)
{
	$scope.a = "AAAAAAA";
	$scope.products =
	[
		{'name':'Samsung','price':300,'active':false},
		{'name':'Iphone','price':700,'active':false},
		{'name':'Xiaomi','price':400,'active':false},
		{'name':'Nokia','price':600,'active':false},
		{'name':'OPPO','price':400,'active':false}


	];



	$scope.addToList = function(x){
		x.active = !x.active;
		
	}

	$scope.total = function(){

		var total = 0;

		angular.forEach($scope.products,function(x)
		{
			if(x.active==true)
			total = total + x.price;
		})

		return total;
	}


});