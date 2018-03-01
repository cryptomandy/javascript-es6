
//  继承
//  1） 原型链模式
function SuperFun1(){
    this.aaa = true;
}
SuperFun1.prototype.getSuperProper1 = function(){
    return this.aaa;
}

function SubFun2(){
    this.bbb = false;
}
SubFun2.prototype = new SuperFun1();

SubFun2.prototype.getSubProper1 = function(){
    return this.bbb;
}

SubFun2.prototype.getSuperProper1 = function(){
    return "aaa";
}

var c = new SubFun2();
// console.log(c);
// console.log(c.getSubProper1());
// console.log(c.getSuperProper1());

console.log(c instanceof SuperFun1);
//重写原型的方法放在替换原型语句之后



























// 测试回调函数

function b1(con,callback){
        $.ajax({
            url:"http://m.ly.com/Healthy/api/HomeApi/Slideshow",
            dataType:"json",
            success:function(res){
                console.log("b1数据",res,con);
                if(typeof callback =="function"){
                    callback && callback.call();
                }
            }
        });

}

function ccc(){
    var con={name:"获取"};
    b1(con,function(data){
         $.ajax({
            url:"http://m.ly.com/Healthy/api/HomeApi/NewsList",
            dataType:"json",
            success:function(res1){
                console.log("回到函数数据",res1,data);
            }
        })
    })
}
// ccc();

var array = [
    {a:1,b:2,c:3,d:4},
    {a:11,b:22,c:333,d:44},
    {a:11,b:222,c:333,d:444},

    {a:111,b:22,c:333,d:444},
    {a:1,b:22,c:33,d:44},
    {a:111,b:222,c:33,d:444},

    {a:111,b:222,c:33,d:44}
];

function obj2key(obj, keys){
    var n = keys.length,
        key = [];
    while(n--){
        key.push(obj[keys[n]]);
    }
    return key.join('|');
}

function uniqeByKeys(array,keys){
    var arr = [];
    var hash = {};
    for (var i = 0, j = array.length; i < j; i++) {
        var k = obj2key(array[i], keys);
        if (!(k in hash)) {
            hash[k] = true;
            arr .push(array[i]);
        }
    }
    return arr ;
}

// console.log(uniqeByKeys(array,['a','b']));
var a5 = "NMD90DD883390FFFFDFF";
var arr = [];

for (var i = 0; i < a5.length; i=i+2) {
    var str = a5[i] + a5[i+1];
    arr.push(str);
};
var strArr = "";
var len = arr.length;
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    i==len-1 ? (strArr += arr[i]) : (strArr += arr[i] + " ");
};
console.log(strArr);


"AB0016FF5120110C121000000D00000000000000"