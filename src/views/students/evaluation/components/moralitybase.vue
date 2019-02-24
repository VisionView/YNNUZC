<template>
    <el-form ref="" :model="moralityBbaseForm">
      <table class="table table-bordered">
        <tr>
          <th rowspan="3" class="table-left-title">基础性素质</th>
          <th colspan="12" class="table-small-title">品德基础素质(定性考评，必填)</th>
        </tr>
        <tr>
          <th colspan="2">政治表现</th>
          <th colspan="2">遵纪守法</th>
          <th colspan="2">社会公德</th>
          <th colspan="2">个人品质</th>
          <th colspan="2">人际关系</th>
          <th colspan="2">劳动表现</th>
          <!-- <th>扣分</th>
          <th colspan="5">扣分原因</th> -->
        </tr>
        <tr>
          <td colspan="2">1</td>
          <td colspan="2">2</td>
          <td colspan="2">3</td>
          <td colspan="2">4</td>
          <td colspan="2">5</td>
          <td colspan="2">6</td>
        </tr>
      </table>
      <el-button type="primary" @click="showMoreData" class="addMoreData"><i class="el-icon-upload el-icon--right"></i>&nbsp;添加定量考评数据</el-button>
      <el-dialog :visible.sync="MoreData" width="40%" title="提示" class="Formdialog">
        <el-form ref="form" :model="moreDataUpdate" label-width="80px">
          <el-form-item label="类型">
            <el-select placeholder="请选择定量考评类型">
              <el-option label="加分" value="加分"></el-option>
              <el-option label="扣分" value="扣分"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="原因说明">
            <el-input  type="textarea" class="textarea"></el-input>
          </el-form-item>
          <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple :show-file-list="true" :before-upload="beforeupload">
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将<em>证明文件</em>拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form>
        <!-- 
        
        证明材料
        <el-upload drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
         -->
         <span slot="footer" class="dialog-footer">
          <el-button @click="MoreData = false">取 消</el-button>
          <el-button type="primary" @click="submitData">确 定</el-button>
        </span>
      </el-dialog>
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
      moreDataUpdate: {},
      active: 1,
      MoreData: false
    }
  },
  methods: {
    next () {
      Bus.$emit('val', this.active)
      Bus.$emit('finishAct', this.active)
      if (this.active > 6) this.active = 0;
      this.$router.push({ path: 'bodybase'})
    },
    showMoreData () {
      this.MoreData = true
    },
    submitData () {
      this.MoreData = false
    },
    beforeupload (file) {
      console.log(file)
      console.log(file.name)
    }
  }
}
</script>
<style lang="stylus" scoped>
.el-input
  max-width 72px
.addMoreData
  margin 20px 0
.el-dialog
  .el-select
    width 100%
.el-upload
  width 100% !important
.el-upload-dragger
  width 100% !important
</style>

