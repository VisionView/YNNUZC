<template>
  <div>
    <el-card>
      <el-row>
        <el-col :span="4" v-for="(o, index) in 19" :key="o" :offset="index > 0 ? 2 : 0">
          <el-card :body-style="{ padding: '0px' }">
            <img src="http://element-cn.eleme.io/static/hamburger.50e4091.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        options2: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '信息学院',
        }, {
          value: '选项3',
          label: '化工'
        }, {
          value: '选项4',
          label: '美术'
        }, {
          value: '选项5',
          label: '物电'
        }],
        value2: ''
      }
    }
  }
</script>
<style lang="stylus" scoped>
.image {
    width: 100%;
    display: block;
  }
</style>
