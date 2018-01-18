<template>
 <el-container class="admin-wrap">
    <el-header>
      <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="">图书控制台</el-menu-item>
        <el-menu-item index="add">录入图书</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main-content">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script type="text/babel">
// import { cookie } from '../utils/util'
// import account from '../utils/account.json'
export default {
  name: 'AdminIndex',
  // created () {
  //   let ck = cookie.get('library_admin')
  //   let cf = cookie.get('library_flag')
  //   if (!ck || cf !== account.cookieFlag) { // 无权限跳转主页
  //     this.$router.push({path: '/'})
  //   }
  // },
  data () {
    return {
      index: ''
    }
  },
  methods: {
    handleSelect (e) {
      console.log(e)
      this.$router.push({path: `/admin/${e}`})
    }
  }
}
</script>

<style lang="stylus" scoped>
  .admin-wrap {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #ccc;
  }
</style>
