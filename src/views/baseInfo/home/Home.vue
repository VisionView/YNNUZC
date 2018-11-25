<template>
  <el-card>
    <h1>首页展示内容</h1>
    男女比例
    籍贯分布
    学院人数
    <div ref="oneChart" style="width: 500px; height: 500px; background: #efefef;"></div>
  </el-card>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      sexNum: {
        
      }
    }
  },
  methods: {
    initCharts () {
      let sexChart = this.$echarts.init(this.$refs.oneChart)
      this.sexChartInfo(sexChart)
    },
    sexChartInfo (sexChart) {
      let option = {
        title: {
          text: '申报人数男女比例',
          subtext: '模拟数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['男', '女']
        },
        series: [{
          name: '男女比例',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: [
            { value: 300, name: '男' },
            { value: 632, name: '女' }
          ]
        }]
      }
      sexChart.setOption(option)
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>
