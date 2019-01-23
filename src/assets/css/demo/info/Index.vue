<template>
  <el-card>
    <el-row>
      <el-col :span="24">
        <colleges-number/>
      </el-col>
      <el-col :span="12">
        <male-number/>
      </el-col>
    </el-row>
    <!-- 学院数、教师数、 -->
    男女比例（饼状图）
    民族分布（饼状图）
    籍贯分布（饼状图）
    F11 全屏
    分布（饼状图）
  </el-card>
</template>
<script>
import  CollegesNumber from './components/charts/colNum'
import  MaleNumber from './components/charts/sex'
export default {
  components: {
    CollegesNumber,
    MaleNumber
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
