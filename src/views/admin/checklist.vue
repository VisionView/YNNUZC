<template>
  <div>
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column prop="sex" label="性别" width="80"></el-table-column>
        <el-table-column prop="sex" label="民族" width="120"></el-table-column>
        <el-table-column prop="sNum" label="学号" width="180"></el-table-column>
        <el-table-column prop="grate" label="年级" width="80"></el-table-column>
        <el-table-column prop="colloge" label="学院" width="200"></el-table-column>
        <el-table-column prop="profession" label="专业"></el-table-column>
        <el-table-column prop="people" label="审核人" width=""></el-table-column>
        <el-table-column prop="result" label="审核结果" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="viewResult(scope.row)">查看</el-button>
          <el-button type="text" size="small" @click="viewResult(scope.row)">审核</el-button>
        </template>
      </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'CheckList',
  data () {
    return {
      ishow: false,
      tableData: [
        {
          id: '1',
          name: '小李',
          sex: '男',
          sNum: '16432050000XXX',
          colloge: '信息学院',
          profession: '计算机科学与技术',
          grate: '16',
          people: '赵三',
          result: '待审核'
        },
        {
          id: '2',
          name: '小赵',
          sex: '男',
          sNum: '16432050000XXX',
          colloge: '物电学院',
          profession: '声乐',
          grate: '16',
          people: '李四',
          result: '通过'
        },
        {
          id: '3',
          name: '小高',
          sex: '女',
          sNum: '16432050000XXX',
          colloge: '音乐舞蹈学院',
          profession: '声乐',
          grate: '16',
          people: '王二',
          result: '待审核'
        },
        {
          id: '4',
          name: '小白',
          sex: '女',
          sNum: '16432050000XXX',
          colloge: '音乐舞蹈学院',
          profession: '声乐',
          grate: '16',
          people: '王二',
          result: '待审核'
        }
      ],
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
      Grade: [{
        id: '1',
        text: '16'
      },
      {
        id: '2',
        text: '17'
      },{
        id: '3',
        text: '18'
      }],
      selectInfo: {}
    }
  },
  methods: {
    viewResult (row) {
      this.$router.push({path: '/ID/' + row.id})
    }
  }
}
</script>
