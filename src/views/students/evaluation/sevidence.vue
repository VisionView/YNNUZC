<template>
  <el-card>
    <el-upload multiple drag action="https://jsonplaceholder.typicode.com/posts/" list-type="picture">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </el-card>
</template>
<style lang="stylus" scoped>
.el-card
  max-width 1000px
  margin 0 auto
</style>
