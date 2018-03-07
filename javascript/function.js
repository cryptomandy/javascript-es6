//1. 函数和匿名函数
var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i);
    };
}
a[6](); // 10


/**
 * 2. 作用域，局部和全局作用域
 * */ 
function Fun(val){
    // 私有属性
    val = 1;        // 私有基本属性
    var arr = [1];      // 私有引用属性
    function fun(){}    // 私有函数（引用属性）
    
    // 实例属性
    this.val = val;               // 实例基本属性
    this.arr = [1];             // 实例引用属性
    this.fun = function(){};    // 实例函数（引用属性）

    console.log(this.val);  
}
var a1 = new Fun("3");


//3. 变量提升
var v ='abc';  
function fun1(){  
    // console.log(v);
    v = "123";
    // console.log(v);  
};
fun1();
console.log(v);
//abc 123 123


//4. 闭包
function fun3(){
    var aaa = 3;
    return function(){
        aaa *= 4;
        return aaa;
    }
}

var fun4 = fun3();
console.log(fun4()); //12
console.log(fun4()); //48


//5. 回调函数 
//主函数
function main1(callback){
    var num = 40;
    if(callback && typeof callback==="function"){
        callback(num);
    }
}
// 回调函数
function callFun(num){
    console.log(num);
}
main1(callFun);
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
// console.log(ccc());

// 6. 多层作用域
function ff (n,m){
    console.log(n);
    return function ff(n){
        console.log(n);
        return function ff(n){
            return n;
        }
    }
}

//7. 数组filter和map用法不同，filter是过滤其中的数据，map是遍历每一项，计算后的结果,返回的都是数组
var arr = [1,2,3,4,5,6];
var res = arr.map(function(item,index,array){
    return item * 2;
});
console.log(res);
//[2, 4, 6, 8, 10, 12]

var arr = [1,2,3,4,5,6];
var res = arr.filter(function(item,index,array){
    return item == 3;
});
console.log(res);
//[3]




//8 .创建对象的7种方式

// 1) 工厂方式: 处理多个相似对象问题
function  personA(name,age,sex){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function(){
        console.log(this.name);
    }
    return obj;
}   

var person1 = personA("lily","34","女");
console.log(person1);

// 2） 构造函数模式
/**
 * @desc : 构造函数要名字要以大写字母开头
 * */ 

// 调用构造函数创建对象过程： 1. 创建一个新对象；2. 
function  PersonB(name,age,sex){
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.sayName = function(){
        console.log(this.name);
    }
}  

var person2 = new PersonB("lily","34","女");
var person3 = new PersonB("any","24","女");
// console.log(person2);

person2.constructor == PersonB;
person3.constructor == PersonB;


// 3) 原型模式

function learnFun(){}
learnFun.prototype.name = "lily";
learnFun.prototype.sex = "女";
learnFun.prototype.age = "27";
learnFun.prototype.filterArr = function(){
    console.log(this.name);
}
var f1 = new learnFun();

// console.log(f1);

// 4) 构造函数和原型模式混合
function LearnFun(name,sex,age){
    //实例属性
    this.name = name;
    this.sex = sex;
    this.age = age;
}
//共享属性和方法
learnFun.prototype = {
    constructor:LearnFun,  //让用字面量原型对象的constructor指向构造函数LearnFun
    filterArr :  function(){
        console.log(this.name);
    }
};


// 5) 动态构造函数模式
/**
 * 在构造函数中初始化原型，保持构造函数和原型的优点；
    注意点：不能使用对象字面量来重写原型，在已经创建实例的情况下重写原型，原型和实例之间的关系会被切断
 * */ 
function LearnFun(name,sex,age){
    //实例属性
    this.name = name;
    this.sex = sex;
    this.age = age;
    if(typeof this.filterArr != "function"){
        LearnFun.prototype.filterArr = function(){
            console.log(this.name);
        }
    }
}

// 6) 寄生构造函数模式
function  personA(name,age,sex){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    obj.sex = sex;
    obj.sayName = function(){
        console.log(this.name);
    }
    return obj;
}   

var person1 =  new personA("lily","34","女");
//主要是用到new关键字