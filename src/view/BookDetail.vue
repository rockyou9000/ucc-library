<template>
  <div class="book-detail-wrap">
    <div class="book-line">
      <h1>{{isEdit?'编辑图书':'新增图书'}}</h1>
    </div>
    <div class="book-line">
      <span class="require">书名 : </span><el-input class="detail-input" v-model="name" ></el-input>
    </div>
    <div class="book-line">
      <span class="require">作者 : </span><el-input class="detail-input" v-model="author" ></el-input>
    </div>
    <div class="book-line">
      <span>出版社 : </span><el-input class="detail-input" v-model="publisher" ></el-input>
    </div>
    <div class="book-line">
      <span class="require">所属教会 : </span>
      <el-select v-model="location" >
        <el-option
          v-for="item in churchOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="book-line">
      <span class="require">分类 : </span>
      <el-select v-model="category1" >
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="book-line">
      <span>主编号 : </span><el-input class="detail-input" v-model="firstId" ></el-input>
    </div>
    <div class="book-line">
      <span>单本编号 : </span><el-input class="detail-input" v-model="secondId" ></el-input>
    </div>
    <div class="book-line">
      <el-button type="primary" class="confirm-btn" @click="handleClick">{{isEdit?'确认修改':'确认新增'}}</el-button>
    </div>
  </div>
</template>

<script type="text/babel">
import {addOneBook, editOneBook, getBookDetail} from '../fetch/api'

export default {
  name: 'BookDetail',
  data () {
    return {
      isEdit: false, // 标志位 true 为编辑模式  false 为新增模式
      bookId: undefined,
      name: '',
      author: '',
      publisher: '',
      location: '',
      category1: '',
      firstId: '',
      secondId: '',
      churchOptions: [
        {
          value: '3',
          label: 'UCC'
        },
        {
          value: '2',
          label: '涌泉教会'
        },
        {
          value: '1',
          label: '未知'
        }
      ],
      categoryOptions: [
        {
          value: '2',
          label: '圣经研读'
        },
        {
          value: '3',
          label: '神学宗教'
        },
        {
          value: '4',
          label: '人物传记'
        },
        {
          value: '5',
          label: '灵命进深'
        },
        {
          value: '6',
          label: '婚姻家庭'
        },
        {
          value: '7',
          label: '诗歌敬拜'
        },
        {
          value: '9',
          label: '查经布道'
        },
        {
          value: '8',
          label: '其他'
        }
      ]
    }
  },
  created () {
    const id = this.$route.params.id
    if (id) {
      this.isEdit = true
      this.bookId = id
      // 获取图书详情
      getBookDetail(id)
      .then((res) => {
        if (res && res.data && res.data.respCode === '000') {
          const data = res.data
          this.name = data.name
          this.author = data.author
          this.publisher = data.publisher
          this.category1 = data.category1
          this.location = data.location
          this.firstId = data.firstId
          this.secondId = data.secondId
        }
      })
    }
  },
  methods: {
    handleClick () {
      if (this.validateForm()) {
        const payload = {
          name: this.name.trim(), // 姓名
          author: this.author.trim(), // 作者
          category1: this.category1.trim(), // 分类
          location: this.location.trim() // 所在教会
        }
        if (this.publisher) {
          payload.publisher = this.publisher.trim() // 出版社
        }
        if (this.firstId) {
          payload.firstId = this.firstId.trim() // 主编号
        }
        if (this.secondId) {
          payload.secondId = this.secondId.trim() // 单本编号
        }

        this.$confirm('确认图书信息正确么? ', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          if (this.isEdit) { // 编辑图书
            payload.id = this.bookId.trim()
            editOneBook(payload) // ajax
            .then(res => {
              if (res && res.data) {
                if (res.data.respCode === '000') {
                  // 编辑成功
                  this.$message({
                    type: 'success',
                    message: '编辑成功!'
                  })
                  this.$router.push('/admin/dashboard')
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
            })
            .catch(e => {
              console.log(e)
              this.$message({
                type: 'error',
                message: '未知错误'
              })
            })
          } else { // 新增图书
            addOneBook(payload) // ajax
            .then(res => {
              if (res && res.data) {
                if (res.data.respCode === '000') {
                  // 新增成功
                  this.$message({
                    type: 'success',
                    message: '新增成功!'
                  })
                  this.$router.push('/admin/dashboard')
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
            })
            .catch(e => {
              console.log(e)
              this.$message({
                type: 'error',
                message: '未知错误'
              })
            })
          }
        }).catch(() => {
          this.$notify.info({
            title: '取消操作',
            message: ''
          })
        })
      }
    },
    validateForm () {
      if (!(this.name && this.author && this.location && this.category1)) {
        this.$notify.error({
          title: '错误',
          message: '请完善填写信息'
        })
        return false
      }
      return true
    }
  }
}
</script>

<style lang="stylus" scoped>
  .book-detail-wrap{
    margin-top: 60px;
    .book-line{
      width: 300px;
      margin: 0 auto 30px;
      h1{
        font-size: 20px;
        text-align: center;
        font-weight: bold;
        margin-bottom: 50px;
      }
      span{
        display: inline-block;
        width: 100px;
        &:before{
          content: "*";
          display: inline-block;
          margin: 0 5px;
          visibility: hidden;
        }
        &.require:before{
          color: red;
          visibility: visible;
        }
      }
      .confirm-btn{
        display: block
        margin: 70px auto;
      }
    }
    .detail-input{
      display: inline-block;
      width: 200px;
    }
  }
</style>
