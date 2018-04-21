<template>
  <div class="admin-edit">
    <div class="search-type">
      <el-select class="selector" v-model="typeProp" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-input class="search-input" v-model="infoProp" placeholder="请输入搜索内容"></el-input>
    <!-- <el-button class="search-btn" type="primary" plain @click="handleSearch">搜索</el-button> -->
    <SearchResult
    :typeProp="typeProp"
    :infoProp="infoProp"
    />
  </div>
</template>

<script type="text/babel">
import SearchResult from './SearchResult'

export default {
  name: '',
  components: {
    SearchResult
  },
  data () {
    return {
      infoProp: '',
      typeProp: 'name',
      options: [{
        value: 'name',
        label: '书名'
      }, {
        value: 'author',
        label: '作者'
      }, {
        value: 'publisher',
        label: '出版社'
      }
      // {
      //   value: 'categories',
      //   label: '分类'
      // },
      // {
      //   value: 'locations',
      //   label: '所属教会'
      // }
      ]
    }
  },
  methods: {
    // handleSearch () {

    // }
  }
}
</script>

<style lang="stylus" scoped>
  .search-type
    display: inline-block;
    margin-right: 20px;
    .selector
      display: inline-block;
      width: 150px;
  .search-input
    width: 500px;
    margin-right: 30px;
</style>
