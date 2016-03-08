angular.module('nodeOne')
.controller('rootCtrl', function( $scope ) {
	$scope.messages = [
		{
			  message: 'Hello friends'
			, author: 'Ryan'
		}
		, {
			  message: 'Hello?'
			, author: 'Ryan'
		}
		, {
			  message: 'I see how it is.'
			, author: 'Ryan'
		}
	]
});