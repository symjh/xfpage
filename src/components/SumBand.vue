<!-- 总计栏 -->
<template>
  <div class="div-bottom" >
  <el-row :gutter="10" >
    <el-col :span="4"><el-checkbox v-model="checked" @change="allChoose" style="padding-left:20px;width:100%">全选</el-checkbox></el-col>
    <el-col :span="14">总计:￥{{total}}.00</el-col>
    <el-col :span="6"><el-button type="danger" style="width:100%">确认</el-button></el-col>
  </el-row>
  </div>

</template>

<script>
export default {
  name: 'SumBand',
  data () {
    return {
      checked:false,
    }
  },
  props: {
    total: null,
  },
  methods:{
    allChoose(val) {
      console.log(val);
      this.$emit('allChoose',null);
    }
  }
}
</script>

<style>
  .div-bottom {
    position: fixed;
    z-index: 2;
    bottom: 60px;
    width:100%;
    border: 1px solid #ebeef5;
    background-color: #fff;
    margin-left: -8px;
    line-height:3;
  }
</style>