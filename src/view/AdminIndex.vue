<template>
  <div class="admin-index">
    <h1>欢迎进入图书管理页面</h1>
    <el-button class="index-btn" @click="addBook" type="success">录入图书</el-button>
    <el-button class="index-btn"  @click="editBook"  type="primary">图书编辑</el-button>
  </div>
</template>

<script type="text/babel">
export default {
  name: '',
  data () {
    return {

    }
  },
  methods: {
    addBook () {
      this.$router.push('/admin/add')
    },
    editBook () {
      this.$router.push('/admin/dashboard')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .admin-index{
    height: 600px;
    background: url('../assets/image/bg-timg.jpeg') 0 0 no-repeat;
    background-size: cover;
    text-align: center;
    h1{
      font-size: 40px;
      color: #fff;
      padding: 180px 0 120px;
    }
  }
</style>

