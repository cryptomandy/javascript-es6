function FunPackage(obj){
    this.name = obj.name || "name";
    this.url = obj.url || "url";
    this.code = obj.code || "code";      
}
FunPackage.prototype = {
    constructor:FunPackage,
    setData:function(){
        console.log(this.name);
    }
}

var o1 = new FunPackage({
    name:"1",
    url:"45456546",
    code:"ddd"
});
var o2 = new FunPackage({
    name:"2",
    url:"45456546",
    code:"ddd"
});
o1.setData = function(){
    console.log(this.name + "test");
}
o1.toString = function(){
    console.log("tostring");
}



 console.log(o1,"o1");
 o1.setData();
 o1.toString();
 console.log(o2.toString());

o2.setData();    


//1. return 函数用法， 返回一个执行函数
var ii = 1;      //定义循环变量
function func1(){
    ii++
    if(i < 5){
        console.log(ii + '')     
        return func1(); // 执行循环   2、3、4、undefined
    }
}
// console.log(func1())

var testA = {
    name:"luvy",
    sex:"男",
    age:"34",
    name2:"34ddd"
};
var testB = {};
for(var key in testA){
    //跳出当前某个条件，但是其他循环还在继续
    if(testA[key] == "男"){
        continue;
    }else{
        testB[key] = testA[key];
    }
}
// console.log(testB,"testB"); //age:"34",name:"luvy",name2:"34ddd"
