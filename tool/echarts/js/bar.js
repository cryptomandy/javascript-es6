let Index = {
  //横轴数据
  xData: ['苏州工业园区', '广州', '杭州', '西安高新科技区', '深圳'],
  yData: [
    {
      count: 12000,
      cityName: '苏州',
      rateValue: 7652,
      value: 39.86,
      name: '苏州',
      data: {
        cityname: '苏州',
        proname: '苏州'
      }
    },
    {
      count: 12000,
      cityName: '广州',
      rateValue: 2049,
      value: 10.67,
      name: '广州',
      data: {
        cityname: '苏州',
        proname: '苏州'
      }
    },
    {
      count: 12000,
      cityName: '杭州',
      rateValue: 1127,
      value: 5.87,
      name: '杭州'
    },
    {
      count: 12000,
      cityName: '西安',
      rateValue: 728,
      value: 3.79,
      name: '西安'
    },
    {
      count: 12000,
      cityName: '深圳',
      rateValue: 608,
      value: 3.17,
      name: '深圳'
    }
  ],
  init() {
    this.baseBar(); //普通柱形图
  },
  baseBar() {
    let myChart = echarts.init(document.getElementById('baseBarBox'));
    // 指定图表的配置项和数据
    let optionBar = {
      //表头说明
      title: {
        text: '城市柱形图',
        textStyle: {
          //表头样式
          color: '#333', //文字颜色
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: 18 //表头字体大小
        }
      },
      color: ['#0092fe'], //柱形图基本颜色
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'  点击触发柱形图是否有阴影
        }
      },
      grid: {
        //绘图距离容器的距离
        left: '5%',
        right: '5%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisTick: {
          show: true,
          alignWithLabel: true
        },
        axisLabel: {
          interval: 0,
          show: true,
          padding: 0,
          lineHeight: 14,
          color: '#333', //刻度颜色
          fontSize: 12, //刻度大小
          formatter: function(value) {
            //TODo: 横轴文字自定义格式化
            let result = ''; //拼接加\n返回的类目项
            let maxLength = 3; //每项显示文字个数
            let rowNumber = Math.ceil(value.length / maxLength); //类目项需要换行的行数
            if (rowNumber > 1) {
              for (let i = 0; i < rowNumber; i++) {
                let temp = ''; //每次截取的字符串
                let start = i * maxLength; //开始截取的位置
                let end = start + maxLength; //结束截取的位置
                temp = value.substring(start, end) + '\n';
                result += temp; //拼接生成最终的字符串
              }
              return result;
            } else {
              return value;
            }
          }
        },
        splitLine: {
          //y轴分割线
          show: true,
          lineStyle: {
            // x轴分割线样式
            color: ['#e7e7e7'],
            type: 'solid' //分割线类型
          }
        },
        data: this.xData //x轴数据,
      },
      //y轴
      yAxis: [
        {
          type: 'value',
          minInterval: 1, //最小间隔数
          splitLine: {
            //y轴分割线
            show: true,
            lineStyle: {
              color: ['#e7e7e7'],
              type: 'solid' //分割线类型
            }
          },
          axisLabel: {
            formatter: '{value}%' //TODO：柱形图刻度百分比显示
          }
        }
      ],
      legend: {
        data: []
      },
      //占比率
      series: [
        {
          name: '错误量',
          type: 'bar',
          barWidth: '20', //柱形图宽度
          data: this.yData, //y轴数据
          tooltip: {
            trigger: 'item',
            formatter: function(p) {
              console.log(p, '');
              // TODO:提示显示
              let fdf = [
                '错误量：' + p.data.rateValue + '<br>',
                '错误量占比率：' + p.data.value + '%<br>'
              ].join('\n');
              return fdf;
            }
          },
          itemStyle: {
            normal: {
              label: {
                //柱形图数据在itemStyle中显示
                show: true, //是否显示柱形图数据值
                position: 'top', //柱形图数据在图例中显示位置
                trigger: 'item',
                formatter: '{c}%' //柱形图图形百分比显示
              },
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                // 渐变色显示
                {
                  offset: 0,
                  color: '#83d9e4'
                },
                {
                  offset: 1,
                  color: '#31a4b8'
                }
              ])
            }
          }
        }
      ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(optionBar);
  }
};
Index.init();

