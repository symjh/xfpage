<template>

  <div style="height: 100%;">
  <router-view/>
  <el-menu :default-active="activeIndex" class="el-menu-bottom el-menu-demo" mode="horizontal" @select="handleSelect" >
  <el-menu-item index="1">
    <div>
      <router-link to="/product"><i class="iconfont ali-icon-shouye"></i></router-link>
    </div>
   </el-menu-item>
<!--   <el-submenu index="2" disabled>
    <template slot="title">1</template>
    <el-menu-item index="2-1">选项1</el-menu-item>
    <el-menu-item index="2-2">选项2</el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">选项4</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
  </el-submenu> -->
  <el-menu-item index="3" >
    <router-link to="/gouwuche"><i class="iconfont ali-icon-gouwuche"></i></router-link>
  </el-menu-item>
<!--   <el-menu-item index="4"><a href="" target="_blank">订单管理</a></el-menu-item> -->
  <el-menu-item index="5"><router-link to="/sumband"><i class="iconfont ali-icon-yonghu"></i></router-link></el-menu-item>
  </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
      if(key == 1){

      }
    }
  }
}
</script>

<style>
  .el-menu-bottom {
    position: fixed;
    z-index: 2;
    bottom: 0;
  }
</style>
