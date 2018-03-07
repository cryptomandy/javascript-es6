let person1 = {
    "sex": "26",
    "name":"l"
};
// console.log(person1);

class SetOrder{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    toString(){
        return this.x + "属性" + this.y;
    }
}

class orderDetail extends SetOrder{
    constructor (x,y,name){
        super(x,y);
        //super 含义 : 1. 作为函数时 SetOrder.prototype.constructor.call(this)。super代表的是setOrdr的构造函数，指向的是orderDetail的实例；

        
        console.log(Object.getPrototypeOf(orderDetail) == SetOrder,"JICHENG",this);
        this.name = name;
        //super含义： 2. 作为对象时，在普通方法中，指向父级的原型对象；在静态方法中，指向父类。 uper指向父类的原型对象时，定义在父类实例上的方法或属性，是无法通过super调用的
        
    }
    
    toString(){
        return this.name + " " + super.toString();
    }
}

// let c1 = new orderDetail("1","2","lu");

// console.log(c1.toString());

class A{
    constructor(){
        this.a =  1;
    }
    p(){
        return 2 ;  
    }
}

class B extends A{
    constructor(){
        super();
        // console.log(A.prototype.constructor,"原型");
        console.log(this);
        this.a = "a";
        this.b = "b"
    }
}

//子类的super指向的是子类
// var b1 = new B();
// console.log(b1.a,b1.b);

class AAA {
    constructor() {
      this.x = 1;
    }
    print() {
      console.log(this.x,"原型");
    }
  }
  
class BBB extends AAA {
    constructor() {
      super();
      this.x = 2;

      
      super.x = 3;
      console.log(super.x,"super");  //***由于this指向子类，所以如果果果通过super对某个属性赋值，这时super就是this，赋值的属性会变成子类实例的属性。
      console.log(this.x,"this");  //***
    }
    m() {
      super.print();
      console.log(super.x,"AAA prototype");//super 调取的是AAA的实例，如果x是在原型上写的，可以访问
    }
}

let b3 = new BBB();
console.log(b3.m()); //super.print.call(this)









