<template>
  <div ref="collegesChart" class="echart"></div>
</template>
<script>
export default {
  data () {
    return {
      colleges: {
        desc: ['云南华文学院', '教育科学与管理学院', '教师教育学院', '哲学与政法学院', '云南纪检监察学院', '文学院', '历史与行政学院', '外国语学院', '艺术学院', '体育学院', '高尔夫学院', '数学学院', '物理与电子信息学院', '信息学院', '化学化工学院', '生命科学学院', '旅游与地理科学学院', '经济与管理学院', '会计学院', '能源与环境工程学院', '成人继续教育学院', '东南亚国际学院', '国际汉语教育学院', '职业技术教育学院', '社会发展学院（马列主义教研部）', '传媒学院', '国际学院', '高等教育与区域发展研究院'],
        num: [
          '110', '212', '35', '422', '545', '96', '97', '89', '99', '109', '191', '129', '139', '194', '159', '169', '197', '198', '199', '290', '219', '229', '293', '294', '259', '296', '279', '298'
        ]
      }
    }
  },
  methods: {
    initCharts () {
      let colChart = this.$echarts.init(this.$refs.collegesChart)
      this.colChartInfo(colChart)
    },
    colChartInfo (colChart) {
      let option = {
        title: {
          text: '各学院人数',
          subtext: '2018-2019学年',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}人'
        },
        xAxis: {
          type: 'category',
          data: this.colleges.desc,
          axisLabel: {
            interval: 0,
            rotate: 25
          }
        },
        grid: {
          bottom: '40%'
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: this.colleges.num,
          type: 'bar',
          itemStyle: {
            normal: {
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#d842e6'
              }, {
                offset: 1,
                color: '#783c7e'
              }])
            }
          }
        }],
        color: ['#783c7e']
      }
      colChart.setOption(option)
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>
