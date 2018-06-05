function urlParamsObjTranslator(data,type){
    var type=type||'objToUrl';
    var result=null;

    if(type=='urlToObj'){
        //a=1&b=2&c=3  =>  {a:1,b:2,c:3}
        if(typeof data == 'string'){
            var dataArray=data.split('&');
            result={};
            for(var i=0;i<dataArray.length;i++){
                var dataStr=dataArray[i],
                    dataKey=dataStr.split('=')[0],
                    dataValue=dataStr.split('=')[1];

                result[dataKey]=dataValue;
            }
        }else{
            console.log('urlToObj方式，data必须为a=x&b=xx格式字符串');
        }
    }else{
        //objToUrl方式 {a:1,b:2,c:3}  => a=1&b=2&c=3
        result=[];
        if(typeof data == 'object') {
            for (var key in data) {
                // //即使值不存在也需要进行传送，防止漏传。
                // var tmpStr=key+'='+encodeURIComponent(data[key]);
                // // var tmpStr=key+'='+data[key];
                // result.push(tmpStr);

            	if(data[key]){
            		//如果值不存在，则不放在请求参数里，todo 可能需要改
                    //防止发送的参数值有特殊字符导致发送请求的时候丢失，需要encodeURIComponent处理一下
                    var tmpStr=key+'='+encodeURIComponent(data[key]);
        
                    result.push(tmpStr);
				}else {
                    var tmpStr = key + '=' + "";
                    result.push(tmpStr);
                }
            }
            result=result.join('&');
        }else{
            console.log('objToUrl方式，data必须为对象！');
        }
    }

    return result;
}

exports.urlParamsObjTranslator=urlParamsObjTranslator;