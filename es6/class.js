/**
 * @description es6 类基础
 * */ 

//1. 类的写法，表达式，静态方法，继承
// class Aaa{  
const Aaa = class baseA  {    
    //Class表达式，baseA 只能在Aaa [内部使用]，指代 [当前类] ；

    //构造方法, 类的默认方法
    constructor(x,conf){
        console.log(this,"this在constructor");
        this.x = x;
    }

    static setName(){
        console.log("静态方法");    
    }

    toString(){
        console.log(this,"this指向");
        return this.x;   
    }
    //测试引用类型值
    getParams(conf){
        //内部方法；
        return TestSetParam.call(this,conf);
    }
}   

console.log(Aaa === Aaa.prototype.constructor,"类本身就指向构造函数") //true

//类的实例对象
let testA = new Aaa("111");
console.log(testA.toString());      // (1，mandy) 

// 如果将Aaa内部的this => baseA  则testA.hasOwnProperty('y') 为false；
console.log(testA.hasOwnProperty('x'),"x是实例对象testA自身的属性（因为定义在this变量上）")  //true 

//访问类的静态方法  类的静态方法只能通过访问类访问到，实例不可以； 静态方法包含this关键字，这个this指的是类，而不是实例。
//console.log(testA.setName());  //报错
console.log(Aaa.setName());
console.log("--- --- 华丽丽的分割线 基础语法 --- ---");


function TestSetParam(param){
    let p1 = {};
    p1.id = 1;
    p1.classVal = "icon_" + p1.id;
    return Object.assign(p1,param);
}

// class继承
class childA extends Aaa{
    constructor(x,y){
        super(x);
        this.y = y;
    }
    toString(){
        this.x = "333";
        // return this.x + ":" + this.y + "，" +  this.z;
        return super.toString() + "," +  this.y; //可以使用super()调用父类的方法
    }

}
let testChildA = new childA("222","lucy");
console.log(testChildA.toString());

//改变属性值
testChildA.x = "444"; //外部改变子类x值，不影响其他实例
console.log(testA.x, "父类实例");
console.log(testChildA.x, "子类实例");
//改变引用类型值
console.log(testChildA.getParams({
    "id":2
}));
console.log(testA.getParams({}));

console.log("--- --- 华丽丽的分割线 继承 --- ---");
console.log("--- --- a --- ---");





