<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <colleges-number/>
      </el-col>
      <el-col :span="8">
        <male-number/>
      </el-col>
      <el-col :span="8">
        <national-number/>
      </el-col>
      <el-col :span="8">
        <male-number/>
      </el-col>
    </el-row>
    <!-- 学院数、教师数、 -->
    籍贯分布（饼状图）
    F11 全屏
    分布（饼状图）
  </el-card>
</template>
<script>
import  CollegesNumber from './components/charts/colNum'
import  MaleNumber from './components/charts/sex'
import  NationalNumber from './components/charts/national'
export default {
  components: {
    CollegesNumber,
    MaleNumber,
    NationalNumber
  },
  data () {
    return {

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
