<template>
  <div ref="nationalChart" class="echart"></div>
</template>
<script>
export default {
  data () {
    return {
      national: [
        { name: '汉族', num: '14002' },
        { name: '白族族', num: '1508' },
        { name: '彝族', num: '1102' },
        { name: '维吾尔族', num: '702' },
        { name: '独龙族', num: '402' },
        { name: '布依族', num: '102' },
        { name: '回族', num: '1402' }
      ],
      sexNum: {
        male: '455',
        female: '2000'
      }
    }
  },
  methods: {
    initCharts () {
      let natChart = this.$echarts.init(this.$refs.nationalChart)
      this.sexChartInfo(natChart)
    },
    sexChartInfo (natChart) {
      let data = this.getData(this.national.length)
      natChart.setOption({
        title: {
          text: '各民族占比分布',
          subtext: '模拟数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c}人 ({d}%)'
        },
        series: [{
          name: '各民族占比',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: data.legendData
        }],
        color: function () {
          return '#' + Math.floor(Math.random() * 16777215).toString(16)
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
