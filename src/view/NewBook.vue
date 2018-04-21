<template>
  <div class="new-book-wrapper">
    <el-header>
      <CommonHeader index="new" />
    </el-header>
    <h1 class="developing">敬请期待...</h1>
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
  .developing{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
  }
</style>
