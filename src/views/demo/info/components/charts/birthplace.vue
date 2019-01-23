<template>
  <div>
    <div ref="birthChart" class="echart"></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      national: [
        { name: '云南省', num: '1402' },
        { name: '山东省', num: '158' },
        { name: '四川省', num: '112' },
        { name: '陕西省', num: '72' },
        { name: '贵州省', num: '42' },
        { name: '广东省', num: '12' }
      ],
      sexNum: {
        male: '455',
        female: '2000',
      }
    }
  },
  methods: {
    initCharts () {
      let birthChart = this.$echarts.init(this.$refs.birthChart)
      this.sexChartInfo(birthChart)
    },
    sexChartInfo (birthChart) {
      let data = this.getData(this.national.length)
      birthChart.setOption({
        title: {
          text: '学生籍贯分布情况',
          subtext: '模拟数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}人 ({d}%)'
        },
        series: [{
          name: '籍贯占比',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: data.legendData
        }],
        color: function () {
          return "#" + Math.floor(Math.random()*16777215).toString(16) 
        }
      })
    },
    getData (count) {
      let legendData = []
      let seriesData = []
      for (let i = 0; i < count; i++) {
        legendData.push(this.national[i].name)
        legendData.push({
          name: this.national[i].name,
          value: this.national[i].num
        })
      }
      return {
        legendData: legendData,
        seriesData: seriesData
      }
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>
