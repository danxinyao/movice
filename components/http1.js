/*
* @Author: Administrator
* @Date:   2016-11-19 17:05:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-11-19 20:02:39
*/

'use strict';
(function(angular){
	//由于默认amgular提供的异步请求对象不支持自定义回调函数名
	//angular随机分配的回调幻术名称不被豆瓣支持
	var http =angular.module('moviecat.services.http',[]);
	http.service('HttpService',['$window','$document',function($window,$document){
		this.jsonp = function(url,data,callback){
			//1.挂载回调函数
			var fnSuffix =Math.random().toString().replace('.','');
			var cbFuncName ='my_json_cb'+fnSuffix;
			$window[cbFuncName]=callback;
			//2.将 data json转化为字符串
			var querystring=url.indexOf('?')==-1 ? '?' :'&';
			for(var key in data){
				querystring +=key+'='+data[key]+'&';
			}
			querystring+='callback='+cbFuncName;
			//3.处理url中的回调函数
			var scriptElement =$document[0].createElement('script');
			scriptElement.src=url +querystring;
			//4.创建一个script标签
			$document[0].body.appendChild(scriptElement);
			//5.将script标签放在页面中
		}
	}]);
})(angular)