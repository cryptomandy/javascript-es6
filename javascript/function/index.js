/**
 * @name 算法基础、递归优化、js基础知识
 */

var listData = [
  {
    name: '测试信息',
    twoCode: 'AB0030435,999990,100505',
    createCode: '999990',
    signCode: 'AB0030435',
    id: 'AB0030435'
  },
  {
    name: '测试信息',
    twoCode: 'AB0031743,999990,100505',
    createCode: '999990',
    signCode: 'AB0031743',
    id: 'AB0031743'
  },
  {
    name: '测试信息',
    twoCode: 'AB0030435,999990,100505',
    createCode: '999990',
    signCode: 'AB0030435',
    id: 'AB0030435'
  },
  {
    name: '测试信息',
    twoCode: 'AB0034948,999990,100505',
    createCode: '999990',
    signCode: 'AB0034948',
    id: 'AB0034948'
  },
  {
    name: '测试信息',
    twoCode: 'AB0032662,999990,100505',
    createCode: '999990',
    signCode: 'AB0032662',
    id: 'AB0032662'
  },
  {
    name: '测试信息',
    twoCode: 'AB0031743,999990,100505',
    createCode: '999990',
    signCode: 'AB0031743',
    id: 'AB0031743'
  }
];
var Index = {
  flag: '',
  init: function() {
    // this.getPrime(1,100);
    // this.getFactorial(100);
    // this.tsetReturn();
    // this.getValue();
    this.testarr();
  },
  testarr() {
    let ary = [];
    listData.forEach(item => {
      ary.push(item.id);
    });
    var s = ary.join(',') + ',';
    for (var i = 0; i < ary.length; i++) {
      if (s.replace(ary[i] + ',', '').indexOf(ary[i] + ',') > -1) {
        alert('数组中有重复元素：' + ary[i]);

        break;
      }
    }
  },

  getValue: function() {
    var colNames = ['机构代码', '机构名称', '所属年份', '所属月份', '所属周期'];
    var list = [];

    for (var i = 0; i < colNames.length; i++) {
      list.push({
        text: colNames[i],
        value: '',
        checked: true,
        width: '100px'
      });
    }
    console.log(JSON.stringify(list));

    // var nameList  = [];
    // for (var i = 0; i < $(".ui-jqgrid-labels th div").length; i++) {
    //     nameList.push($(".ui-jqgrid-labels th div").eq(i).text())
    // }
  },
  //求特定范围内质数
  getPrime: function(min, max) {
    var primeList = [];
    for (var i = min; i <= max; i++) {
      var isPrime = true;
      for (var j = 2; j < i; j++) {
        //被2或者小于当前值的数字整除都不是质数
        if (i % j == 0) {
          isPrime = false;
          break;
        }
      }
      //添加是质数的数字
      if (isPrime) {
        primeList.push(i);
      }
    }
    console.log(
      primeList,
      primeList.length,
      '从' + min + '至' + max + '的质数'
    );
    return primeList;
  },
  //求某个值的阶乘
  getFactorial: function(num) {
    if (num == 1) {
      return 1;
    }
  },

  //return函数应用
  tsetReturn() {
    var testR = this.tsetFun();
    for (var i = 0; i < 100; i++) {
      testR(); //主函数只执行一次
    }
  },
  tsetFun() {
    var count = 0;
    console.log(count + ' tsetReturn');
    return function() {
      console.log(count + ' return1');
      return function() {
        console.log(count + ' return2');
        return count++;
      };
    };
  }
};
Index.init();
