<template>
  <div>
    <el-row :gutter="20">
      <el-col>
        <el-button size="small" class="btn-add" @click="handleClickAdd">添加学院</el-button>
      </el-col>
    </el-row>
     <el-dialog title="学院添加" width="30%" :visible.sync="isShowAdd">
      1213
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowAdd = false">取 消</el-button>
        <el-button type="primary" @click="requestAdd = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-row :gutter="20">
      <el-col :span="4" v-for="(item, index) in 19" :key="index">
        <el-card :body-style="{ padding: '0px' }">
          <img src="./logo.jpg" class="image">
          <div class="content">
            <span class="name purple">学院名称 {{index+1}}</span>
            <div class="edit fr clearfix">
              <el-button type="text" class="btn-warning">编辑</el-button>
              <el-button type="text" class="btn-danger">删除</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowAdd: false
    }
  },
  methods: {
    handleClickAdd () {
      this.isShowAdd = true
    }
  }
}
</script>
<style lang="stylus" scoped>
.image
  width 100%
  display block
.el-col
  min-width 180px
  max-width 235px
  margin-bottom 20px
.content
  padding 0 20px
  .name
    font-size 15px
  .edit
    margin-top 10px
</style>
