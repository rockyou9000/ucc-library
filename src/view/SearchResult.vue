<template>
  <div class="search-result">
    <el-table
      :data="tableData"
      row-class-name="row-style"
      style="width: 100%; max-width: 1000px; margin: 0 auto;"
      >
      <el-table-column
        prop="category1"
        label="分类"
        width="50"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="书名"
        >
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="120"
        >
      </el-table-column>
      <el-table-column
        prop="location"
        label="位置"
        width="70"
       >
      </el-table-column>
    </el-table>
    <el-pagination
      small
      background
      @current-change="handleCurrentChange"
      :current-page.sync="pageNum"
      :page-size="20"
      layout="prev, pager, next"
      :total="total"
      class="paginator">
    </el-pagination>
  </div>
</template>

<script type="text/babel">
import * as API from '../fetch/api'

export default {
  name: 'SearchResult',
  created () {
    this.type = this.$route.params.type
    this.info = this.$route.params.info
    this.queryBookList(this.pageNum, this.type, this.info)
  },
  data () {
    return {
      type: '',
      info: '',
      pageNum: 1,
      total: 0,
      pages: 0,
      tableData: []
    }
  },
  methods: {
    queryBookList (pageNum, type, content) {
      API.queryBookList(pageNum, type, content)
      .then((res) => {
        window.scrollTo(0, 0)
        this.renderPage(res)
      })
    },
    renderPage (res) {
      console.log('====================================')
      console.log(res)
      console.log('====================================')
      if (res.data && res.data.respCode === '000') {
        this.tableData = res.data.bookInfoList
        this.pages = res.data.pages
        this.total = res.data.rowCount
      }
    },
    handleCurrentChange (num) {
      console.log(num)
      this.pageNum = num
      this.queryBookList(this.pageNum, this.type, this.info)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .paginator{
    text-align: center;
    margin: 20px auto;
  }
</style>
