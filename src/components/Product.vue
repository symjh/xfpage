<template>
  <el-row >
  <!-- <el-col :span="8" v-for="(o, index) in 12" :key="o" :offset="index > 0 ? 2 : 0"> -->
  <el-col :span="11" v-for="(p, index) in productList" style="margin:2%">
    <el-card :body-style="{ padding: '10px' }">
      <img :src="[require('../assets'+p.path)]" class="image" />
      <div >
        <span>产品{{ p.name }}</span>
        <div class="clearfix">
          <time class="time">{{ currentDate }}</time>
        </div>
        <div>
          <span style="font-size:20px">￥{{p.price}}</span>
          <el-button type="text" style="float: right;padding: 0;" @click="addProduct(index)"><i class="iconfont ali-icon-tianjia" style="font-size:25px"></i></el-button>
        </div>                  
      </div>
    </el-card>
  </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      currentDate: new Date(),
      productList: [],
    }
  },
  methods : {
    addProduct (index){
      console.log(index);
    }
  },
  created: function(){
    this.$http({            
          url: 'http://localhost:8761/product/product/info',
          method: 'GET',
          // 请求体重发送的数据
          data: {
              cat: 1
          },
          // 设置请求头
          headers: {
              'Content-Type': 'x-www-from-urlencoded'
          }
      }).then(function (res) {
          // 请求成功回调
          console.log(res.body);
          this.productList = res.body;
      }, function () {
          // 请求失败回调
      });
  }
}
</script>

<style>
  .time {
    color: #999;
  }


  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
