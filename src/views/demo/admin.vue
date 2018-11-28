<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="3">
        <el-button size="" class="btn-add" @click="handleClickAdd">添加学院管理员</el-button>
      </el-col>
      <el-col :span="20">
        <el-form ref="" :inline="true" :model="selectInfo" label-width="60px">
          <el-form-item label="学院">
            <el-select v-model="selectInfo.college" placeholder="全部" @change="get">
              <el-option :label="item.name" :value="item.name" v-for="item in SelectData" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="专业">
            <el-select v-model="selectInfo.profession" placeholder="全部">
              <el-option :label="item.text" :value="item.text" v-for="item in profession" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-button >筛选</el-button>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog title="学院管理员添加" width="30%" :visible.sync="isShowAdd">
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
        <el-table-column prop="college" label="学院" width="180"> </el-table-column>
        <el-table-column prop="profession" label="专业" width="180"> </el-table-column>
        <el-table-column prop="grade" label="年级" width="180"> </el-table-column>
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
  data () {
    return {
      isShowAdd: false,
      SelectData: [{
        id: '1',
        name: '信息学院',
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
        accountPwd: '123',
      },
      {
        id: '2',
        name: '小李',
        college: '物电学院',
        profession: '电子技术',
        grade: '18',
        account: 'admin',
        accountPwd: '123',
      },
      {
        id: '3',
        name: '小李',
        college: '美术学院',
        profession: '素描',
        grade: '17',
        account: 'admin',
        accountPwd: '132',
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
      for(obj in list) {
        if(this.selectInfo.college == obj.name) {
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
