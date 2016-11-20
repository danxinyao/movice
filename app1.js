/*
* @Author: Administrator
* @Date:   2016-11-18 14:26:15
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-19 22:48:28
*/

'use strict';
angular.module('moviecat',[
	'ngRoute',
	'moviecat.movie_list'
	/*'moviecat.host',
	'moviecat.furture',
	'moviecat.top250'*/
	]).
config(['$routeProvider',function($routeProvider){
	$routeProvider.otherwise({redirectTo:'/in_theaters/1'})
}]);