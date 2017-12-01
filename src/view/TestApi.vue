<template>
  <div>
    <div class="apple">red</div>
    <ele-btn></ele-btn>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>

    <el-date-picker
      v-model="value2"
      align="right"
      type="date"
      placeholder="选择日期"
      :picker-options="pickerOptions1">
    </el-date-picker>
  </div>
</template>

<script>
import {biliNav, getList, getList2} from '@/fetch/api'
import EleBtn from '@/components/button'

export default {
  components: {
    EleBtn
  },
  data () {
    return {
      radio: '1',
      pickerOptions1: {
        disabledDate (time) {
          return time.getTime() > Date.now()
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      },
      value1: '',
      value2: ''
    }
  },
  created () {
    biliNav().then((res) => {
      // console.log(res)
    })
    getList().then((res) => {
      // console.log(res)
    })
    getList2().then((res) => {
      // console.log(res)
    })
    // getList3().then((res) => {
    //   console.log(res)
    // })
  }
}
</script>

<style lang="scss" scoped>
  div {
    .apple{
      color: red;
    }
  }
</style>
