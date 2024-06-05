var mychart1= echarts.init(document.querySelector(".box1"));
//指定配置和数据
var option1={
  color: ["#2f89cf"],
   title:{
   },
   tooltip:{ 
    trigger: "axis",
    axisPointer: {
      // 坐标轴指示器，坐标轴触发有效
      type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
    }                 
   },
   grid: {
    left: "0%",
    top: "20px",
    right: "0%",
    bottom: "20%",
    containLabel: true
  },
   legend:{
       data:['人数'],
       textStyle: {
         color: '#F0F8FF', // 设置X轴标签文字颜色为黄色
         fontSize: 9     
       },
       top :0,// 将图例移动到图表底部，距离底部 10 像素
       itemWidth: 20, // 设置图例图标的宽度为10像素
       itemHeight: 10 // 设置图例图标的高度为10像素
   },
   xAxis:{
       data:['5-6岁','7-8岁','9-10岁','11-12岁'],
       axisLabel: {
        color: "rgba(255,255,255,.6)",
         interval: 0, // 设置为 0 表示不隐藏任何标签
         fontSize: 10
      }
   },
   yAxis:{
       axisLabel: {
        color: 'rgba(240, 248, 255, 0.7)' // 设置Y轴标签文字颜色为带有透明度的白色
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255,255,255,.1)"
          // width: 1,
          // type: "solid"
        }
      },
      splitLine: {
        show: false // 不显示 y 轴的背景横线
    }

   },
   series:[{
       name:'人数',
       type:'bar',
       data:[99,93,97,90],
       barCategoryGap: '40%' ,// 设置同一类目下不同系列柱状图之间的间距为 20%
       itemStyle: {
        barBorderRadius: 5
       }
   }]
};
mychart1.setOption(option1);

function updateChartData1(a1, a2, a3, a4) {
option1.series[0].data = [a1, a2, a3, a4];
mychart1.setOption(option1);
window.addEventListener("resize", function() {
  mychart1.resize();
});
}
updateChartData1(79, 92, 91, 99, 97,89);
var mychart2= echarts.init(document.querySelector(".box2"));
var option2 = {
title: {
},
tooltip: {
trigger: 'axis' // 提示框触发类型为坐标轴触发
},
grid: {
  left: "0%",
  top: "15px",
  right: "0%",
  bottom: "15%",
  containLabel: true
},
xAxis: {
type: 'category', // X 轴类型为类目轴
data: ['2019', '2020', '2021', '2022', '2023'], // X 轴数据
axisLabel: {
     color: '#F0F8FF' ,// 设置X轴标签文字颜色为白色
     interval: 0, // 设置为 0 表示不隐藏任何标签
     fontSize: 12
  }
},
yAxis: {
type: 'value', // Y 轴类型为数值轴

axisLabel: {
     color: '#F0F8FF' ,// 设置X轴标签文字颜色为白色
     formatter: '{value}w', // 自定义格式化 Y 轴标签，显示 'w' 单位
     interval: 0, // 设置为 0 表示不隐藏任何标签
     fontSize: 10
  },
  splitLine: {
    lineStyle: {
        color: 'rgba(255, 255, 255, 0.1)' // 设置 y 轴分割线的颜色为半透明的白色
    }
}
},
series: [{
name: '需求', // 数据系列名称
type: 'line', // 图表类型为折线图
data: [69, 97, 100, 102, 150], // 数据系列
axisLabel: {
     color: '#F0F8FF' ,// 设置X轴标签文字颜色为白色
     interval: 0, // 设置为 0 表示不隐藏任何标签
     fontSize: 2
  }    
}]
};
mychart2.setOption(option2);
function updateChartData2(a1, a2, a3, a4, a5) {
  option2.series[0].data = [a1, a2, a3, a4, a5];
  mychart2.setOption(option2);
  window.addEventListener("resize", function() {
    // 让我们的图表调用 resize这个方法
    mychart2.resize();
  });
  }
  updateChartData2(67, 79, 91, 99, 145);

  //饼图
  window.onload = function(){} //等页面加载完后
    var myChart3= echarts.init(document.querySelector(".box3"));
    var option3 = {
    title: {
    },
    series: [
    {
    name: '活动类型的分布',
    type: 'pie',
    radius: '55%',
    center: ['50%', '43%'],
    data: [
        {value: 10, name: '职业介绍', itemStyle: { color: '#ff7f50' }},
        {value: 10, name: '职业展望', itemStyle: { color: '#ffeb7b' }},
        {value: 20, name: '手工操作', itemStyle: { color: '#00ffff' }},
        {value: 15, name: 'AI课程', itemStyle: { color: '#7fff00' }},
        {value: 45, name: '馆校及训练营', itemStyle: { color: '#ff00ff' }}
    ],
    label: {
        show: true,
        formatter: function (params) {
            var customFormat = '';
    
            if (params.name.length > 6) {
                customFormat = params.name.substring(0, 6) + '\n' + params.name.substring(6);
            } else {
                customFormat = params.name;
            }
            return customFormat + ': '+ '\n' +  params.percent + '%'; // 添加百分比格式
        },
       fontSize:8
    }
    }]
    };
    // 使用制定的配置项和数据显示图表
    myChart3.setOption(option3);
    function updateChartData3(a1, a2, a3, a4, a5) {
        option3.series[0].data = [
            { value: a1, name: '职业介绍', itemStyle: { color: '#ff7f50' } },
            { value: a2, name: '职业展望', itemStyle: { color: '#ffeb7b' } },
            { value: a3, name: '手工操作', itemStyle: { color: '#00ffff' } },
            { value: a4, name: 'AI课程', itemStyle: { color: '#7fff00' } },
            { value: a5, name: '馆校及训练营', itemStyle: { color: '#ff00ff' } }
        ];
        // 刷新图表
        myChart3.setOption(option3);
        window.addEventListener("resize", function() {
            // 让我们的图表调用 resize这个方法
            myChart3.resize();
          });
        }
        // 示例参数输入，您可以根据实际情况修改
        updateChartData3(79, 92, 91, 99, 97);

//
(function() {
  // 基于准备好的dom，初始化echarts实例
  var myChart5 = echarts.init(document.querySelector(".box4"));

  option5 = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "25",
      right: "10",
      bottom: "10",
      containLabel: true
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },

        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
          "27",
          "28",
          "29",
          "30"
        ]
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20
      }
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: "公众号",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(1, 132, 213, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(1, 132, 213, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          40,
          30,
          40,
          30,
          40,
          30,
          60,
          20,
          40,
          20,
          40,
          30,
          60,
          20,
          40,
          20,
          40
        ]
      },
      {
        name: "抖音",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)"
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)"
                }
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [
          50,
          30,
          50,
          60,
          10,
          50,
          30,
          50,
          60,
          40,
          60,
          40,
          80,
          30,
          50,
          60,
          10,
          50,
          30,
          70,
          20,
          50,
          10,
          40,
          50,
          30,
          70,
          20,
          50,
          10,
          40
        ]
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart5.setOption(option5);
  window.addEventListener("resize", function() {
    myChart5.resize();
  });
})();