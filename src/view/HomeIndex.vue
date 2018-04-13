<template>
  <div class="home-wrap">
    <el-container>
      <el-header>
        <CommonHeader index="home" />
      </el-header>
      <el-main class="main-content">
        <h1>UCC / 涌泉图书馆</h1>
        <el-input class="search-input" v-model="input" placeholder="请输入搜索内容"></el-input>
        <el-button class="search-btn" type="primary" plain @click="handleSearch">搜索</el-button>
        <div class="search-type">
          <h2>搜索条件</h2>
          <el-select class="selector" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script type="text/babel">
import CommonHeader from 'components/CommonHeader'

export default {
  name: 'HomeIndex',
  components: {
    CommonHeader
  },
  data () {
    return {
      input: '',
      value: 'name',
      options: [{
        value: 'name',
        label: '书名'
      }, {
        value: 'author',
        label: '作者'
      }, {
        value: 'publisher',
        label: '出版社'
      }, {
        value: 'categories',
        label: '分类'
      }, {
        value: 'locations',
        label: '所属教会'
      }]
    }
  },
  methods: {
    handleSearch () {
      if (this.input.trim() === '') {
        this.$router.push({path: '/result'})
      } else {
        this.$router.push({path: `/result/${this.value}/${this.input}`})
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.home-wrap
  .main-content
    text-align: center;
    padding-top: 80px;
    h1
      margin-bottom: 40px;
      font-size: 26px;
      text-align: center;
      @media screen and (min-width: 768px) {
        margin-bottom: 40px;
        font-size: 30px;
      }
    .search-type
      margin: 20px auto 0;
      text-align: center;
      h2
        margin-right: 10px;
        font-size: 16px;
        color: #606266;
        display: inline-block;
      .selector
        display: inline-block;
        width: 180px;
      @media screen and (min-width: 768px) {
        width: 600px;
        text-align: left;
      }
    .search-input
      width: 180px;
      margin-right: 10px;
      @media screen and (min-width: 768px) {
        width: 500px;
        margin-right: 30px;
      }
</style>
