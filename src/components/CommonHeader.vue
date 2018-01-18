<template>
  <el-menu :default-active="index" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="home">首页</el-menu-item>
    <el-menu-item index="new">新书推荐</el-menu-item>
    <el-menu-item index="login">管理员入口</el-menu-item>
  </el-menu>
</template>

<script type="text/babel">
export default {
  name: 'CommonHeader',
  props: {
    index: {
      type: String,
      required: true
    }
  },
  methods: {
    handleSelect (e) {
      this.$router.push({path: e})
    }
  }
}
</script>
