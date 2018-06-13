console.log("-----------排序测试-----------")
/**
 * @name 排序测试
 * @description 生成大量测试数据，测试排序时间，深入理解常用排序
 * */ 

 // https://www.cnblogs.com/liyongshuai/p/7197962.html
 // https://www.cnblogs.com/dushao/p/6004883.html
 // https://www.cnblogs.com/Unknw/p/6346681.html

var totalCount = 0,  //总的循环次数
    sortCount = 80,  //总测试数据条数
    baseData = [],// 测试数据
    testPreTime = 0; // 测试前时间
/**
 * @name 生成测试数据
 * */ 
function BaseData(data){
    var data = [];
    for (let i = 0; i < sortCount; i++) {
        // var num = parseInt(Math.random(0,1) * sortCount * 1.5);
        // if(i % 5 == 0){
        //     num = parseInt(-num);
        // }
        var num = i;
        // if(i % 3 == 0 ){
        //     num = -(i + parseInt(i / 4));
        // }else if(i % 5 == 0){
        //     num = i + parseInt(i / 8);
        // }else if(i % 7 == 0){
        //     num = i - parseInt(i*1.5);
        // }else{
        //     num = i;
        // }

        if(i % 3 == 0 ){
            num = -(i + parseInt(i / 4));
        }else if(i % 7 == 0){
            num = i + parseInt(i / 8);
        }else{
            num = i;
        }
        data.push(num);
    }
    return data;
}
// console.log(BaseData(),"原始data");
baseData= BaseData();



/**
 * @name 冒泡排序
 * @description 原理：数据对比两两交换
 * @summary
 * */  
function BubbleSort1(data){
    //原始冒泡方法一：
    for (var i = 0; i < data.length; i++) {
        for (var j = 0; j < data.length-1; j++) {  
            // console.log(data[i],data[j]); 
            if(data[j] > data[j+1]){ //  相邻k两个数之间一直对比交互；
                var item = data[j+1];
                data[j+1] = data[j];
                data[j] = item;
            }
        }
    }
    return data;
}
//冒泡一个冒泡二都是先排最大的： 这两种排序算法都是先排最后一位，最后一位是最大的，然后以此类推
function BubbleSort2(data){
    //冒泡方法二：
    var i = data.length - 1;
    while(i > 0){  //针对位置
        var __index = 0;
        for (let j = 0; j < i; j++) { //针对数字
            if(data[j] > data[j+1]){
                __index = j;
                var item = data[j+1];
                data[j+1] = data[j];
                data[j] = item;
            }
        }
        i = __index;
    }
    return data;
}
testPreTime=  getTime(); //测试前时间
//console.log(totalCount, BubbleSort1(baseData),"冒泡一");  
//console.log(getTime() - testPreTime,"时间差值ms");

testPreTime=  getTime(); //测试前时间
//console.log(totalCount, BubbleSort2(baseData),"冒泡二");  
//console.log(getTime() - testPreTime,"时间差值ms");


/**
 * @name 选择排序
 * @description 原理：每轮每个数和其他数对比，循环选择出最大或者最小的
 * */  
//排第一个位置
function SelectSort(data){
    var curIndex = 0;
    
    //方法二：
    for (var i = 0; i < data.length-1 ; i++) {  
        //eg： 第一个数和之后的每一个数对比，将小的放置在前面，循环将每一个数和他之后的每一个数对比
        //循环N次
        for (var j = i + 1 ; j < data.length; j++) {  
            // console.log(data[i],data[j]); 
            if(data[j] < data[curIndex]){ // 每次对比最小的数据的索引位置
                curIndex = j;   //将最小数的索引保存
            }
        }
        var item = data[i];
        data[i] = data[curIndex];
        data[curIndex] = item;
        // console.log(curIndex,i);
    }
    return data;  
}
testPreTime=  getTime(); //测试前时间
//console.log(totalCount, SelectSort(baseData),"选择");
//console.log(getTime() - testPreTime,"时间差值ms");  


/**
 * @name 插入排序
 * @description  不太懂？？？
*/
function InsertSort(data){
    var preIndex = 0,
        current;
    for (var i = 1; i < data.length; i++) {
        key = data[i];
        preIndex = i - 1;
        while(data[preIndex] > key && preIndex > -1){
            //console.log(preIndex,i);
            data[preIndex+1] = data[preIndex];  
            preIndex--;    
        }
        data[preIndex+1] = key;
    }
    return data;
}

/**
 * @name 拆半插入排序
 * @description 
*/
function HalfInsertSort(){
    
}
testPreTime=  getTime(); //测试前时间
console.log(totalCount, InsertSort(baseData),"插入排序");
console.log(getTime() - testPreTime,"时间差值ms");  

// testPreTime=  getTime(); //测试前时间
// console.log(totalCount, QuickSort(baseData),"拆半插入排序");
// console.log(getTime() - testPreTime,"时间差值ms");  
/**
 * @name 快速排序
 * */  
function QuickSort(){
    
}



/**
 * @name 归并排序
 * */  
function MergeSort(){
    
}



/**
 * @name 计算当前时间
 * */ 
function getTime(){
    return new Date().getTime();
}
 
