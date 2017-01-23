var toString = Object.prototype.toString;
var isString = function (obj) {
    return toString.call(obj) == '[object String]';
}
var isFunction = function (obj) {
    return toString.call(obj) == '[object Function]';
}

//another way
var isType = function (type) {
    console.log('[object ' + type + ']')
    return function (obj) {
        return toString.call(obj) == '[object ' + type + ']';
    };
}
//类似 isType 这种通过引入部分参数来产生一个新的定制函数的形式就是片函数
var isString = isType('String');//[object String]
var isFunction = isType('Function');//[object Function]

//
var obj = {
    xhr: function (type, url, callback) {
        return function () {
            var request = new XMLHttpRequest();
            request.open(type, url, true);
            request.onreadystatechange = function () {
                if (this.readyState == 4) {
                    callback(this);
                }
            }
            request.send();
        }
    }
}
obj.xhr('GET','www.baidu.com',function(response){
    if(response.status == 200){
        //处理回调
    }else{
        console.log('error');
    }
})