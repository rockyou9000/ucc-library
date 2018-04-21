<template>
  <div class="book-detail-wrap">
    <div class="book-line">
      <span>书名 : </span><el-input class="detail-input" v-model="name" ></el-input>
    </div>
    <div class="book-line">
      <span>作者 : </span><el-input class="detail-input" v-model="author" ></el-input>
    </div>
    <div class="book-line">
      <span>出版社 : </span><el-input class="detail-input" v-model="publisher" ></el-input>
    </div>
    <div class="book-line">
      <span>所属教会 : </span>
      <el-select v-model="selChurch" >
        <el-option
          v-for="item in churchOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="book-line">
      <span>分类 : </span>
      <el-select v-model="selType" >
        <el-option
          v-for="item in categoryOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <el-button type="primary" @click="handleClick">{{isEdit?'确认修改':'确认新增'}}</el-button>
  </div>
</template>

<script type="text/babel">
export default {
  name: 'BookDetail',
  data () {
    return {
      isEdit: false, // 标志位 true 为编辑模式  false 为新增模式
      bookId: undefined,
      name: '',
      author: '',
      publisher: '',
      selChurch: '',
      selType: '',
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
    }
  },
  methods: {
    handleClick () {

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
      span{
        display: inline-block;
        width: 80px;
      }
    }
    .detail-input{
      display: inline-block;
      width: 200px;
    }
  }
</style>
