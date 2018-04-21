<template>
<el-container class="admin-wrap">
  <el-header>
    <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="index">首页</el-menu-item>
      <el-menu-item index="dashboard">图书控制台</el-menu-item>
      <el-menu-item index="add">录入图书</el-menu-item>
    </el-menu>
  </el-header>
  <el-main class="main-content">
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script type="text/babel">
import { cookie } from '../utils/util'
import password from '../utils/password.json'
export default {
  name: 'AdminIndex',
  created () {
    const ck = cookie.get('library_admin')
    const cf = cookie.get('library_flag')
    if (!ck || cf !== password.cookieFlag) { // 无权限跳转主页
      this.$router.push({path: '/'})
    }
    this.updateAcitve()
  },
  data () {
    return {
      index: ''
    }
  },
  methods: {
    handleSelect (e) {
      this.$router.push({path: `/admin/${e}`})
    },
    updateAcitve () {
      const path = this.$route.path
      const r = path.match(/admin\/(.*)/)
      let t = r ? r[1] : ''
      let s
      if (/\//.test(t)) {
        s = t.match(/(.*)?\//)
        t = s ? s[1] : ''
      }
      this.index = t
    }
  },
  watch: {
    '$route' () {
      this.updateAcitve() // 跳转更新head栏active标志
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
  }
  .main-content{
    min-height: 600px;
  }
</style>
