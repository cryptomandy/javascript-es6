/**
 * @name 排序测试
 * @description 生成大量测试数据，测试排序时间，深入理解常用排序
 * */ 

 // https://www.cnblogs.com/liyongshuai/p/7197962.html

var totalCount = 0,  //总的循环次数
    sortCount = 1000,  //总测试数据条数
    testPreTime = 0; // 测试前时间
/**
 * @name 生成测试数据
 * */ 
function BaseData(data){
    var data = [];
    for (let ii = 0; ii < sortCount; ii++) {
        // var num = parseInt(Math.random(0,1) * sortCount * 1.5);
        // if(ii % 5 == 0){
        //     num = parseInt(-num);
        // }
        var num = ii;
        if(ii % 3 == 0 ){
            num = -(ii + parseInt(ii / 4));
        }else if(ii % 5 == 0){
            num = ii + parseInt(ii / 8);
        }else if(ii % 7 == 0){
            num = ii - parseInt(ii*1.5);
        }else{
            num = ii;
        }

        data.push(num);
    }
    return data;
}
console.log(BaseData(),"原始data");

/**
 * @name 计算当前时间
 * */ 
function getTime(){
    return new Date().getTime();
}
/**
 * @name 冒泡排序
 * @description 原理：数据对比两两交换
 * @summary 循环N*N次 
 * */  
function BubbleSort(data){
    
    //原始冒泡方法一：
    // for (var ii = 0; ii < data.length; ii++) {
    //     for (var jj = 0; jj < data.length-1; jj++) {  
    //         // console.log(data[ii],data[jj]); 
    //         var item  = 0;
    //         if(data[jj] > data[jj+1]){ //  相邻k两个数之间一直对比交互；
    //             item = data[jj+1];
    //             data[jj+1] = data[jj];
    //             data[jj] = item;
    //         }
    //     }
    // }
    //方法二：

    var _index2 = 0;
    for (var ii = 0; ii < data.length; ii++) {
        for (var jj = 0; jj < data.length-1; jj++) {  
            // console.log(data[ii],data[jj]); 
        }
    }
    return data;
}

testPreTime=  getTime(); //测试前时间
console.log(totalCount, BubbleSort(BaseData()),"冒泡");
console.log(getTime() - testPreTime,"时间差值ms");  // 100 000:[12373,12805,13087,12650  ]; 100 000:[133,146 ,139,142]
//1.74809268154846(10000)       1.705128205128205 (10000)

/**
 * @name 选择排序
 * @description 原理：每轮每个数和其他数对比，循环选择出最大或者最小的
 * */  
//排第一个位置
function SelectSort(data){
    var curIndex = 0;
    
    //方法二：
    for (var ii = 0; ii < data.length-1 ; ii++) {  
        //eg： 第一个数和之后的每一个数对比，将小的放置在前面，循环将每一个数和他之后的每一个数对比
        //循环N次
        var item  = 0;
        for (var jj = ii + 1 ; jj < data.length; jj++) {  
            // console.log(data[ii],data[jj]); 
            if(data[jj] < data[curIndex]){ // 每次对比最小的数据的索引位置，放到对应的索引中
                curIndex = jj;  
                totalCount++;
            }
        }
        item = data[ii];
        data[ii] = data[curIndex];
        data[curIndex] = item;
        // console.log(curIndex,ii);
    }
    return data;  
}
// testPreTime=  getTime(); //测试前时间
// console.log(totalCount, SelectSort(BaseData()),"选择");
// console.log(getTime() - testPreTime,"时间差值ms");  // 100 000:[7078,7342,7449,7619]; 100 000:[77,78,84 ,91]






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