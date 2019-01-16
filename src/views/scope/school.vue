<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="3">
        <el-button size="" class="btn-add" @click="handleClickAdd">添加学校管理员</el-button>
      </el-col>
    </el-row>
    <el-dialog title="学校管理员添加" width="30%" :visible.sync="isShowAdd">
      <el-form ref="" :model="addAdmin" label-width="60px">
        <el-form-item label="账号">
          <el-input v-model="addAdmin.account" placeholder="电话/学号/其他"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="addAdmin.accountPwd" placeholder="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isShowAdd = false">取 消</el-button>
        <el-button type="primary" @click="requestAdd = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-card>
      <el-table style="width: 100%" :data="adminData">
        <el-table-column prop="id" label="ID" width="80"> </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
        <el-table-column prop="account" label="账号" width=""> </el-table-column>
        <el-table-column prop="accountPwd" label="密码" width=""> </el-table-column>
        <el-table-column fixed="right" label="操作" width="100" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'SchoolAdmin',
  data () {
    return {
      isShowAdd: false,
      SelectData: [{
        id: '1',
        name: '信息学院'
      }],
      profession: [{
        id: '1',
        text: '软件工程'
      },
      {
        id: '2',
        text: '大数据'
      },
      {
        id: '3',
        text: '计算机科学与技术'
      }],
      ProList: [],
      addAdmin: {
        account: '',
        accountPwd: ''
      },
      selectInfo: {
        college: '',
        profession: '',
        grade: ''
      },
      adminData: [{
        id: '1',
        name: '小李',
        college: '信息学院',
        profession: '软件工程',
        grade: '16',
        account: 'admin',
        accountPwd: '123'
      },
      {
        id: '2',
        name: '小李',
        college: '物电学院',
        profession: '电子技术',
        grade: '18',
        account: 'admin',
        accountPwd: '123'
      },
      {
        id: '3',
        name: '小李',
        college: '美术学院',
        profession: '素描',
        grade: '17',
        account: 'admin',
        accountPwd: '132'
      }]
    }
  },
  methods: {
    handleClickAdd () {
      this.isShowAdd = true
    },
    get () {
      let obj
      let list = eval(this.SelectData)
      for (obj in list) {
        if (this.selectInfo.college === obj.name) {
          this.ProList = obj.list.profession
        }
      }
    }
  },
  computed: {}
}
</script>
<style lang="stylus" scoped>
.select
  margin-bottom 10px
</style>
