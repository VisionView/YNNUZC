<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="id" width="80"> </el-table-column>
    <!-- <el-table-column prop="date" label="日期" width="150"> </el-table-column> -->
    <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
    <el-table-column prop="province" label="学号" width="120"> </el-table-column>
    <el-table-column prop="city" label="学院" width="120"> </el-table-column>
    <el-table-column prop="address" label="专业"> </el-table-column>
    <el-table-column prop="zip" label="年级" width="120"> </el-table-column>
    <el-table-column prop="purview" label="权限" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },

    data() {
      return {
        tableData: [{
          id: '1',
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          purview: '评议员'
        }, {
          id: '2',
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          purview: '评议员'
        }, {
          id: '3',
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          purview: '评议员'
        }, {
          id: '4',
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          purview: '评议员'
        }]
      }
    }
  }
</script>