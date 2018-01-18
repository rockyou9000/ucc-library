<template>
  <div class="new-book-wrapper">
    <el-header>
      <CommonHeader index="new" />
    </el-header>
    <h1>新书推荐</h1>
  </div>
</template>

<script type="text/babel">
import CommonHeader from 'components/CommonHeader'
export default {
  name: 'NewBook',
  components: {
    CommonHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
