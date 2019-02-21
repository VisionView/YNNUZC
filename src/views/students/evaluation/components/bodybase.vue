<template>
  <el-form ref="" :model="bodyBaseForm">
    <table class="table table-bordered">
      <tr>
        <th rowspan="4" class="table-left-title">基础性素质</th>
        <th colspan="12" class="table-small-title">(二)身心基础素质</th>
      </tr>
      <tr>
        <th rowspan="2">体育成绩</th>
        <th rowspan="2">心理品质</th>
        <th rowspan="2">审美情趣</th>
        <th colspan="2">出勤情况</th>
        <th colspan="3">体育锻炼态度</th>
        <th rowspan="2">军训</th>
        <th rowspan="2">扣分</th>
        <th rowspan="2" colspan="2">扣分原因</th>
      </tr>
      <tr>
        <th>体育课出勤</th>
        <th>体育活动出勤</th>
        <th>①</th><th>②</th><th>③</th>
      </tr>
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
        <td>5</td>
        <td>6</td>
        <td>7</td>
        <td>8</td>
        <td>9</td>
        <td>10</td>
        <td colspan="2">11</td>
      </tr>
    </table>
    <el-row :gutter="20">
        <el-col :span="8"><el-button plain type="info" @click="prevent" class="table-btn">返回上一步</el-button></el-col>
        <el-col :span="16"><el-button plain type="primary" @click="next" class="table-btn">提交并下一步</el-button></el-col>
      </el-row>
  </el-form>
</template>
<script>
import Bus from '@/views/common/buss.js'
export default {
  name: 'StudentBodyBase',
  data () {
    return {
      bodyBaseForm: {},
      active: 2
    }
  },
  methods: {
    prevent () {
      Bus.$emit('val', this.active - 2)
      if (this.active > 6) this.active = 0;
      this.$router.push({ path: 'moralitybase'})
    },
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0;
      this.$router.push({ path: 'moralityimprove'})
    }
  }
}
</script>
