/**
 * @name 算法基础、递归优化、js基础知识
 */ 
var Index = {
    init: function(){
        // this.getPrime(1,100);
        this.getFactorial(100);
    },
    //求特定范围内质数
    getPrime: function(min, max){
        var primeList = [];
        for(var i = min; i <= max; i++){
            var isPrime = true;
            for(var j = 2; j < i; j++){
                //被2或者小于当前值的数字整除都不是质数
                if(i % j == 0){
                    isPrime = false;
                    break;
                }
            }
            //添加是质数的数字
            if(isPrime){
                primeList.push(i);
            }
        }
        console.log(primeList, primeList.length, '从' + min + '至' + max + '的质数')
        return primeList;
    },
    //求某个值的阶乘
    getFactorial :function(num){
        if(num==1){
            return 1;
        }
        
    }
    
}
Index.init();