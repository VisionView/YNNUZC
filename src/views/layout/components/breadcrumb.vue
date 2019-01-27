<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item v-for="(item,index) in BreadList" :key='index' v-if="item.meta.name" :to="{path: item.path}">{{item.meta.name}}</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script>
export default {
  data () {
    return {
      BreadList: ''
    }
  },
  created () {
    this.getBread()
  },
  methods: {
    getBread () {
      this.BreadList = this.$route.matched
    }
  },
  watch: {
    $route () {
      this.getBread()
    }
  }
}
</script>
