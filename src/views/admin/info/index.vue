<template>
  <el-card>
    <el-row>
      <el-col :span="24" v-loading="loading">
        <colleges-chart/>
      </el-col>
      <el-col :span="8">
        <male-chart/>
      </el-col>
      <el-col :span="8">
        <national-chart/>
      </el-col>
      <el-col :span="8">
        <birth-chart/>
      </el-col>
    </el-row>
    <!-- 学院数、教师数、 -->
  </el-card>
</template>
<script>
import CollegesChart from './components/charts/colNum'
import MaleChart from './components/charts/sex'
import NationalChart from './components/charts/national'
import BirthChart from './components/charts/birthplace'
export default {
  components: {
    CollegesChart,
    MaleChart,
    NationalChart,
    BirthChart
  },
  data () {
    return {
      loading: true
      // loading: false
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
.el-card
  min-width 1100px
</style>
