console.log("-----------原型-----------")
/**
 * @description js继续
 * @date 2017-11-13
 * */ 
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









