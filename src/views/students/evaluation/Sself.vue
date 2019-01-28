<template>
  <el-card>
    <div class="title">云南师范大学本科学生综合素质测评学生自评打分表</div>
    <el-row>
      <el-col :span="6"><span class="stu-item">学院：</span>信息学院</el-col>
      <el-col :span="6"><span class="stu-item">班级：</span>16</el-col>
      <el-col :span="6"><span class="stu-item">学号：</span>1643205000XXX</el-col>
      <el-col :span="6"><span class="stu-item">姓名：</span>wwd</el-col>
    </el-row>
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
        <tr><td colspan="12" class="small-title">(二)身心基础素质</td></tr>
        <tr>
          <td rowspan="2">体育成绩</td>
          <td rowspan="2">心理品质</td>
          <td rowspan="2">审美情趣</td>
          <td colspan="2">出勤情况</td>
          <td colspan="3">体育锻炼态度</td>
          <td rowspan="2">军训</td>
          <td rowspan="2">扣分</td>
          <td rowspan="2" colspan="2">扣分原因</td>
        </tr>
        <tr>
          <td>政治表现</td>
          <td>遵纪守法</td>
          <td>社会公德</td>
          <td>个人品质</td>
          <td>人际关系</td>
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
        <tr>
          <td rowspan="12" class="form-title">发展性素质</td>
          <td colspan="12" class="small-title">(一)品德发展素质</td>
        </tr>
        <tr>
          <td colspan="2">学生干部工作绩效</td>
          <td>先进个人</td>
          <td colspan="2">加分原因</td>
          <td>先进集体</td>
          <td colspan="2">加分原因</td>
          <td colspan="2">精神文明建设</td>
          <td colspan="2">加分原因</td>
        </tr>
        <tr>
          <td colspan="2">1</td>
          <td>2</td>
          <td colspan="2">3</td>
          <td>4</td>
          <td colspan="2">5</td>
          <td colspan="2">6</td>
          <td colspan="2">7</td>
        </tr>
        <tr><td colspan="12" class="small-title">(二)社会实践素质</td></tr>
        <tr>
          <td colspan="2">演讲、辩论、征文及知识竞赛等</td>
          <td colspan="2">加分原因</td>
          <td colspan="2">社会实践能力</td>
          <td colspan="2">加分原因</td>
          <td colspan="2">宣传能力</td>
          <td colspan="2">加分原因</td>
        </tr>
        <tr>
          <td colspan="2">1</td>
          <td colspan="2">2</td>
          <td colspan="2">3</td>
          <td colspan="2">4</td>
          <td colspan="2">5</td>
          <td colspan="2">6</td>
        </tr>
        <tr><td colspan="12" class="small-title">(三)科技创新素质</td></tr>
        <tr>
          <td>科技竞赛</td>
          <td>加分原因</td>
          <td>科研论文</td>
          <td>加分原因</td>
          <td>科研训练或相关课题</td>
          <td>加分原因</td>
          <td>出版专著(参与编著)</td>
          <td>加分原因</td>
          <td>其他</td>
          <td colspan="3">加分原因</td>
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
          <td colspan="3">10</td>
        </tr>
        <tr><td colspan="12" class="small-title">(四)职业综合素质</td></tr>
        <tr>
          <td>师范生技能</td>
          <td>加分原因</td>
          <td>职业技术能力</td>
          <td>加分原因</td>
          <td>外语能力</td>
          <td>加分原因</td>
          <td>计算机运用能力</td>
          <td>加分原因</td>
          <td>体育能力</td>
          <td>加分原因</td>
          <td>艺术活动能力</td>
          <td>加分原因</td>
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
          <td>11</td>
          <td>12</td>
        </tr>
      </table>
      <el-form-item>
        <el-button type="primary" @click="onSubmitForm" class="btn-submit"><i class="el-icon-upload"></i> 提交表格</el-button>
      </el-form-item>
    </el-form>
    <div class="indicate">学生处管理科制</div>
  </el-card>
</template>
<script>
export default {
  data () {
    return {
      stuScoreForm: {

      }
    }
  },
  methods: {
    onSubmitForm () {
      alert('表格提交按钮')
    }
  }
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
  border 1px solid #ccc
  padding 5px
  line-height 24px
  text-align center
  vertical-align middle
.form-table
  width 100%
  margin 15px 0
  border 1px solid #ccc
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
