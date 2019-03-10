<template>
    <el-form ref="" :model="moralityBbaseForm">
      <table class="table table-bordered">
        <tr>
          <th rowspan="3" class="table-left-title">基础性素质</th>
          <th colspan="12" class="table-small-title">(一)品德基础素质</th>
        </tr>
        <tr>
          <th>政治表现</th>
          <th>遵纪守法</th>
          <th>社会公德</th>
          <th>个人品质</th>
          <th>人际关系</th>
          <th>劳动表现</th>
          <th>扣分</th>
          <th colspan="5">扣分原因</th>
        </tr>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
          <td colspan="5">8</td>
        </tr>
      </table>
      <el-row :gutter="20">
        <el-col :span="24"><el-button plain type="primary" @click="next" class="table-btn">提交并下一步</el-button></el-col>
      </el-row>
    </el-form>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  name: 'StudentMoralityBase',
  data () {
    return {
      moralityBbaseForm: {},
      active: 1
    }
  },
  methods: {
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0
      this.$router.push({ path: 'bodybase' })
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-input
  max-width 72px
</style>
