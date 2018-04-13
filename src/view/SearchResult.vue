<template>
  <div class="search-result" id="result">
    <el-table
      :data="tableData"
      row-class-name="row-style"
      align="center"
      style="width: 100%; max-width: 1000px; margin: 0 auto;"
      >
      <el-table-column
        prop="category1"
        label="分类"
        width="50"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="书名"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="author"
        label="作者"
        width="120"
        align="center"
        >
      </el-table-column>
      <el-table-column
        prop="location"
        label="位置"
        width="70"
        align="center"
       >
      </el-table-column>
      <el-table-column
        v-if="isAdmin"
        prop="publisher"
        label="出版社"
        width="150"
        align="center"
       >
      </el-table-column>
      <el-table-column
        v-if="isAdmin"
        label="修改"
        width="200"
        align="center"
       >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
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
import { cookie } from '../utils/util'
import password from '../utils/password.json'

export default {
  name: 'SearchResult',
  created () {
    this.type = this.$route.params.type || ''
    this.info = this.$route.params.info || ''
    this.queryBookList(this.pageNum, this.type, this.info)
    // 检测是否有admin权限
    const ck = cookie.get('library_admin')
    const cf = cookie.get('library_flag')
    if (ck && cf === password.cookieFlag && this.$route.path === '/admin/dashboard') this.isAdmin = true
  },
  data () {
    return {
      isAdmin: false,
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
        document.getElementById('result').scrollIntoView()
        this.renderPage(res)
      })
    },
    renderPage (res) {
      if (res && res.data && res.data.respCode === '000') {
        this.tableData = res.data.bookInfoList
        this.pages = res.data.pages
        this.total = res.data.rowCount
      }
    },
    handleCurrentChange (num) {
      this.pageNum = num
      this.queryBookList(this.pageNum, this.type, this.info)
    },
    handleEdit (index, row) {
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        API.removeOneBook(row.id)
        .then(res => {
          if (res && res.data) {
            if (res.data.respCode === '000') {
              // 删除成功
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              // 移除列表数据
              this.tableData.splice(index, 1)
            } else if (res.data.respCode === '001') {
              this.$message({
                type: 'error',
                message: '未找到相关记录'
              })
            } else if (res.data.respCode === '999') {
              this.$message({
                type: 'error',
                message: '未知错误'
              })
            }
          } else {
            this.$message({
              type: 'error',
              message: '未知错误'
            })
          }
        }).catch(e => {
          this.$message({
            type: 'error',
            message: '未知错误'
          })
        })
      }).catch(e => {
        this.$message({
          type: 'info',
          message: '已取消'
        })
      })
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
