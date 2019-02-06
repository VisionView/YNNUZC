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
.el-card
  max-width 1140px
  margin 0 auto
  .title
    text-align center
    line-height 34px
    font-size 20px
    font-weight bold
  .el-row
    margin 30px 0 20px 0
    .el-col
      min-width 200px
      .stu-item
        font-weight 600
  .btn-submit
    width 100%
    margin-top 15px
  .indicate
    margin 20px 0
    text-align right
.form-table td
  max-width 72px
  border 1px solid #dee2e6
  padding 5px
  line-height 24px
  text-align center
  vertical-align middle
.form-table
  width 100%
  margin 15px 0
  border 1px solid #dee2e6
  .form-title
    width 30px
    font-weight bold
    letter-spacing 2px
    text-align center
    vertical-align middle
  .small-title
    line-height 36px
    font-weight bold
</style>

