<template>
  <div>
    <el-card>
    <div class="academy">信息学院</div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="cart">
          <div class="desc">学生总人数</div>
          <div class="num">800 (人)</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cart">
          <div class="desc">申报总人数</div>
          <div class="num">600 (人)</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cart">
          <div class="desc">未申报总人数</div>
          <div class="num">200 (人)</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="cart lastCart">
          <div class="desc">学院数</div>
          <div class="num">19</div>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div ref="oneChart" class="echart"></div>
      </el-col>
      <el-col :span="18">
        <div ref="twoChart" class="echart"></div>
      </el-col>
    </el-row>
    <!-- <h1>首页展示内容</h1>
    男女比例
    籍贯分布
    学院人数 -->
  </el-card>
  </div>
</template>
<script>
export default {
  name: 'AcademyStatistics',
  data () {
    return {
      sexNum: {
        male: '455',
        female: '200'
      }
    }
  },
  methods: {
    initCharts () {
      let sexChart = this.$echarts.init(this.$refs.oneChart)
      let twoChart = this.$echarts.init(this.$refs.twoChart)
      this.sexChartInfo(sexChart)
      this.twoChartInfo(twoChart)
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
        color: ['#37a2da', '#e062ae']
      }
      sexChart.setOption(option)
    },
    twoChartInfo (twoChart) {
      let option = {
        title: {
          text: '各专业人数',
          subtext: '模拟数据',
          x: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b} : {c}人'
        },
        xAxis: {
          type: 'category',
          data: ['软件工程', '网络工程', '空间信息', '教育技术学', '计科A', '计科B']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          data: [120, 200, 150, 80, 70, 110],
          type: 'bar'
        }]
      }
      twoChart.setOption(option)
    }
  },
  mounted () {
    this.initCharts()
  }
}
</script>
<style lang="stylus" scoped>
.academy
  font-size 25px
  margin-bottom 10px
.el-card
  .el-row
    margin-bottom 20px
    .cart
      display flex
      min-width 240px
      height 50px
      line-height 50px
      margin-right 40px
      border 1px solid #783c7e
      box-shadow 0 0 10px #eee
      font-weight bold
      letter-spacing 1px
      .desc
        width 100px
        text-align center
        color #fff
        background #783c7e
      .num
        flex 1
        padding-left 20px
        color #783c7e
  .echart
    height 400px
    min-width 260px
</style>
