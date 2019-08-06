class Queue{  
    constructor(){    
        this.items=[];
    }  
    //入队
    enqueue() {      
        var len = arguments.length;      
        if (len == 0) {          
            return;
        }      
        for (var i = 0; i < len; i++) {          
            this.items.push(arguments[i])
        }
    }  
    //出队
    dequeue() {      
        var result = this.items.shift();      
        return typeof result != 'undefined' ? result : false;
    }  
    //队列是否为空
    isEmpty() {     
        return this.items.length == 0;
    }      
    //返回队列长度
    size() {      
        return this.items.length;
    }      
    //清空队列
    clear() {      
        this.items = [];
    }      
    //返回队列
    show() {      
        return this.items;
    }
}
