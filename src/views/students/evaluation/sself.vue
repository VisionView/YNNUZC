<template>
  <div style="height: 300px;">
    <el-steps direction="vertical" :active="1">
      <el-step title="品德基础素质">
        
      </el-step>
      <el-step title="身心基础素质">

      </el-step>
      <el-step title="品德发展素质">

      </el-step>
      <el-step title="社会实践素质">

      </el-step>
      <el-step title="科技创新素质">

      </el-step>
      <el-step title="职业综合素质">

      </el-step>
    </el-steps>
  </div>
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

</style>
