<template>
  <h1>管理页面</h1>
</template>

<script type="text/babel">
import { cookie } from '../utils/util'
import account from '../utils/account.json'
export default {
  name: 'AdminIndex',
  created () {
    let ck = cookie.get('library_admin')
    let cf = cookie.get('library_flag')
    if (!ck || cf !== account.cookieFlag) { // 无权限跳转主页
      this.$router.push({path: '/'})
    }
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
