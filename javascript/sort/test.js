/**
 * @name 算法实现和场景应用
 * */ 

 let index = {};
 index = {
    __len: 100,
    
    init(){
        let arr = this.setData();
        this.bubbleSort(arr);
    },
    //test data
    setData(){
        let list = [];
        for (let i = 0; i < this.__len; i++) {
            if(i % 3 == 0 ){
                list.push(i*(i-1) - 7)  
            }else if(i % 2 == 0 ){
                list.push(i*i + 4)  
            }else{
                list.push(i);
            }
            
        }
        // console.log(list,"list")
        return list;
    },
    //冒泡排序
    bubbleSort(data){
        /**
         * @name 相邻  两两  交换
         * @rules   后面>前面，从大到小   后面<小于前面，从小到大
         * */
        console.log(data);
        let count = 0,
            m = 0;

        for (let i = 0; i < data.length -1; i++) { 
            for (let j = 0; j < data.length-1-i; j++) { 
                if(data[j+1] < data[j]){
                    let exchangeVal = data[j];
                    data[j] = data[j+1];
                    data[j+1] =  exchangeVal;
                }
                count++;
            }
            m++
        }
        console.log(JSON.stringify(data),"bubbleSort", count + "count")
        
        

        for (let i = 0; i < data.length -1; i++) { 
            let flag = true; 
            for (let j = 0; j < data.length - 1 - i; j++) { 
                if(data[j+1] < data[j]){
                    let exchangeVal = data[j];
                    data[j] = data[j+1];
                    data[j+1] =  exchangeVal;
                    flag = false; 
                }
                count++;
            }
            m++
            if(flag){
                break;
            }
           
        }
        console.log(JSON.stringify(data),"bubbleSort", count + "count")
    },
 };
 index.init();