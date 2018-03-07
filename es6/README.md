## 知识栈： es6

### 2018-03-07 class
- 1. class 是对象的模板， es6基本上将class看作一个语法糖，为了使对象原型的写法更清晰
- 2. 类不存在变量提升，必须先定义在，在使用；
- 3. 类的方法定义在 prototype上面；
- 4. 私有属性和方法（es6不提供）
    私有方法实现:
    1）在方法名称前 + "_"，外部依然可以访问到；
    2）将私有的方法移除模块；内部调用eg： xFun.call(this,config); 

    ``` javascript
    class Bbb{
        constructor(){}
        back(conf){
            foo.call(this,conf);
        }
    }
    function foo(conf){
        return this.config=  cfg; 
    }  
    ```
    3）将私有方法名字命名为Symbol值；  

    ``` javascript
    const backA = Symbol("backA");

    ```

- 5. getter() 和 setter()
- 6. 类内部的this默认指向类的实例；1）用bind绑定； 2）用箭头函数； 3）Proxy，获取方法时，自动绑定this 
- 7. 静态方法： 在方法名前+ static，可以在类上调用，不能在类的实例上调用
     静态方法包含this关键字，这个this指的是类，而不是实例。
    TODO： 继承父级的子类是否可以访问
    