<template>
  <div>
    <el-row :gutter="20" >
      <el-col :span="20">
        <el-form ref="" :inline="true" :model="selectInfo" label-width="60px">
          <el-form-item label="专业">
            <el-select v-model="selectInfo.profession" placeholder="全部">
              <el-option :label="item.text" :value="item.text" v-for="item in profession" :key="item.id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="年级">
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
        <el-table-column prop="result" label="审核结果" width=""></el-table-column>
        <el-table-column fixed="right" label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
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
          name: '小刀',
          colloge: '信息学院',
          profession: '计算机科学与技术',
          grate: '16',
          result: '通过'
        },
        {
          id: '2',
          name: '小厉',
          colloge: '信息学院',
          profession: '大数据',
          grate: '16',
          result: '通过'
        },
        {
          id: '3',
          name: '贾斯汀',
          colloge: '信息学院',
          profession: '软件工程',
          grate: '17',
          result: '通过'
        },
        {
          id: '4',
          name: '谭浩强',
          colloge: '信息学院',
          profession: '软件工程',
          grate: '17',
          result: '未通过'
        },
        {
          id: '5',
          name: '丹尼斯·李其',
          colloge: '信息学院',
          profession: '网络工程',
          grate: '17',
          result: '通过'
        },
        {
          id: '6',
          name: '史蒂芬`孙',
          colloge: '信息学院',
          profession: '教育技术',
          grate: '17',
          result: '未通过'
        }
      ],
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
      selectInfo: {

      }
    }
  }
}
</script>
