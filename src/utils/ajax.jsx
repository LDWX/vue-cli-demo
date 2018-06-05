/*
对ajax层进行一次封装，便于统一处理请求的成功、失败和登录跳转逻辑
同时也可以统一ajax的用法，不会根据用的什么库修改发送ajax的逻辑，
统一在这里修改就行
*/
import { Message } from 'element-ui';
import { urlParamsObjTranslator } from './index.jsx';

window.__disableNativeFetch=true;
window.loginUrl = "login.html";

var fetch = require('fetch-ie8');


var successCode= "20000",
		failCode="-1",
		notLoginCode="-99";


function ajax(url,data,successCallback,completeCallback,method,faillCallback,dataType,processData,headers){
	var dataType=dataType||"json";
	var method=method||"post";
	var processData=processData||true;

	if(processData){
		if(typeof data != "string"){
			data=urlParamsObjTranslator(data);
		}
	}
	var fetchResult=fetch(url+(method=="get"?"?"+data:""), {
	  method: method,
        headers: Object.assign({}, { 'Content-Type': 'application/json; charset=UTF-8' }, headers),
	  body: method=="post"?data:""
	}).then(status)
	  .then(json)
	  .then(function(json) {
	    console.log('request succeeded with json response', json);
	    if(String(json.Code) === successCode){
	    	successCallback&&successCallback(json);
	    }else if(String(json.Code) === failCode){
	    	if(typeof faillCallback === "function"){
				faillCallback&&faillCallback(json);
			}else{
				Message(json.detail||json.message||json.msg||"请求失败！");
			}
	    }else if(String(json.Code) === notLoginCode){
	    	window.location.assign(json.data);
	    	/*if(window.loginUrl){
	    		window.location.href=window.loginUrl;
	    	}*/
	    }else{
	    	console.log('未识别的status码：', json.Code)
	    }

	    completeCallback&&completeCallback(json);
	    
	  }).catch(function(error) {
	    console.log('request failed', error)
	  })

	function status(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return response
	  }
	  throw new Error(response.statusText)
	}

	function json(response) {
		if(dataType=="json"){
		    return response.json()
		}else{
			return response;
		}
	}

	return fetchResult;
}


export default ajax;