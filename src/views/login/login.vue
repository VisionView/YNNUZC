<template>
  <div class="login">
    <div class="container">
      <div class="left-desc">
        <div class="ynnu-img"></div>
        <div class="sys-name">大学生综合素质测评系统</div>
      </div>
      <div class="right-login">
        <el-form :model="ruleForm" :rules="rules" status-icon ref="ruleForm" class="demo-ruleForm">
          <el-form-item prop="type">
            <el-select v-model="ruleForm.userType" class="select" placeholder="请选择用户类型">
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="name">
            <el-input type="text" v-model="ruleForm.name" auto-complete="off" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item prop="pass">
            <el-input type="password" v-model="ruleForm.pass" auto-complete="off" placeholder="请输入密码"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
    <div class="copyright">云南师范大学 &copy; 2018 - 极客范技术支持</div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    let validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        callback()
      }
    }
    return {
      options: [
        {
          value: 'teacher',
          label: '教师'
        }, {
          value: 'member',
          label: '评议员'
        }, {
          value: 'student',
          label: '学生'
        }, {
          value: 'manager',
          label: '管理员'
        }
      ],
      ruleForm: {
        userType: '',
        name: '',
        pass: ''
      },
      rules: {
        // type: [
        //   { required: true, message: '请选择用户类型', trigger: 'blur' },
        //   { validator: true, trigger: 'blur' }
        // ],
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { validator: validateName, trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 12, message: '请输入6-12位密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['setUser']),
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit')
          let user = {
            name: 'jsp',
            pawd: '1234567',
            auth: 'edit'
          }
          this.setUser(user)
          this.$router.push({path: '/'})
        } else {
          console.log('error submit!!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.login
  position absolute
  top 0
  left 0
  right 0
  bottom 0
  background url('~@/assets/img/bg2.jpg') center center no-repeat
  background-size cover
  .container
    display flex
    width 880px
    margin 0 auto
    .left-desc
      width 510px
      margin-top 150px
      .ynnu-img
        width 210px
        height 63px
        background url('~@/assets/img/ynnu.gif') center center no-repeat
        background-size cover
      .sys-name
        margin-top 60px
        font-size 32px
        font-family STKaiti
        text-align center
    .right-login
      width 250px
      border-radius 10px
      margin-top 150px
      margin-left 60px
      padding 60px 30px 20px 30px
      background rgba(255,255,255,.4)
      .select
        width 250px
      .login-btn
        width 100%
  .copyright
    position absolute
    width 100%
    bottom 8px
    font-size 13px
    text-align center
    color #eee
</style>
