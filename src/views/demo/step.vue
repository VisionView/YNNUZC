<template>
  <div>
    <el-row :gutter="20" >
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
    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="id" label="ID" width="60"></el-table-column>
        <el-table-column prop="name" label="姓名" width="150"></el-table-column>
        <el-table-column prop="colloge" label="学院" width="200"></el-table-column>
        <el-table-column prop="profession" label="专业" width="200"></el-table-column>
        <el-table-column prop="grate" label="年级" width="80"></el-table-column>
        <el-table-column prop="status" label="状态" width=""></el-table-column>
        <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
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
      tableData: [
        {
          id: '1',
          name: '小李',
          colloge: '信息学院',
          profession: '计算机科学与技术',
          grate: '16',
          status: '待审核'
        },
        {
          id: '2',
          name: '小赵',
          colloge: '音乐舞蹈学院',
          profession: '声乐',
          grate: '16',
          status: '待审核'
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
      selectInfo: {

      }
    }
  }
}
</script>
