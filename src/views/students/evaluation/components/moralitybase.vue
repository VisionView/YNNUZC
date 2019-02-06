<template>
  <div>
    <el-form ref="" :model="stuScoreForm">
      <table class="form-table">
        <tr>
          <td rowspan="7" class="form-title">基础性素质</td>
          <td colspan="12" class="small-title">(一)品德基础素质</td>
        </tr>
        <tr>
          <td>政治表现</td>
          <td>遵纪守法</td>
          <td>社会公德</td>
          <td>个人品质</td>
          <td>人际关系</td>
          <td>劳动表现</td>
          <td>扣分</td>
          <td colspan="5">扣分原因</td>
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
      </el-form>
  </div>
</template>
<script>
export default {
  name: 'StudentMoralityBase'
}
</script>
<style lang="stylus" scoped>

</style>
