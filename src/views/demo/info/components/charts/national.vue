<template>
  <div>
    <div ref="nationalChart" class="echart"></div>
  </div>
</template>
<script>
export default {
  // let Series = [],
  data () {
    return {
      national: [
        { name: '汉族', num: '1402' },
        { name: '白族族', num: '158' },
        { name: '彝族', num: '112' },
        { name: '维吾尔族', num: '72' },
        { name: '独龙族', num: '42' },
        { name: '布依族', num: '12' },
        { name: '回族', num: '142' },
      ],
      sexNum: {
        male: '455',
        female: '2000',
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
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          name: '各民族占比',
          type: 'pie',
          radius: '50%',
          center: ['50%', '50%'],
          data: data.legendData
        }],
        // color: ['#37a2da','#e062ae']
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
