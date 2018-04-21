<template>
  <div class="login-wrapper" @keydown.enter="goLogin">
    <el-header>
      <CommonHeader index="login" />
    </el-header>
    <h1>管理员登录</h1>
    <div class="label">
      账号 <el-input class="input" v-model="accountInput" clearable placeholder="请输入所属教会账号"></el-input>
    </div>
    <div class="label">
      密码 <el-input class="input" v-model="password" clearable type="password" placeholder="请输入密码"></el-input>
    </div>
    <el-button type="primary" class="login-btn"  @click="goLogin">点击登录</el-button>
  </div>
</template>

<script type="text/babel">
import md5 from 'md5'
import { cookie } from '../utils/util'
import password from '../utils/password.json'
import CommonHeader from 'components/CommonHeader'
export default {
  name: 'AdminLogin',
  components: {
    CommonHeader
  },
  data () {
    return {
      accountInput: '',
      password: ''
    }
  },
  methods: {
    goLogin () {
      for (let i in password) {
        if (i === this.accountInput) {
          if (password[i] === md5(this.password)) {
            cookie.set('library_admin', i, 1)
            cookie.set('library_flag', password.cookieFlag, 1)
            this.$router.push({path: '/admin/index'})
          }
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-wrapper {
  text-align center;
  h1 {
    padding-top: 100px;
    font-size: 30px;
    color: #409EFF;
    margin-bottom: 30px;
  }
  .label {
    font-size: 16px;
    margin-bottom: 20px;
  }
  .input{
    margin-left: 10px;
    width: 200px;
  }
  .login-btn{
    margin-top: 40px;
  }
}
</style>
