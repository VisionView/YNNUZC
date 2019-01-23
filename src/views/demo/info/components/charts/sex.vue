<template>
  <div>
    <div ref="sexChart" class="echart"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      sexNum: {
        male: '455',
        female: '2000',
      }
    }
  },
  methods: {
    initCharts () {
      let sexChart = this.$echarts.init(this.$refs.sexChart)
      this.sexChartInfo(sexChart)
    },
    sexChartInfo (sexChart) {
      let option = {
        title: {
          text: '总男女比例',
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
            { value: this.sexNum.male, name: '男' },
            { value: this.sexNum.female, name: '女' }
          ]
        }],
        color: ['#37a2da','#e062ae']
      }
      sexChart.setOption(option)
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>
