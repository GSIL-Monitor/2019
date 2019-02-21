<template>
  <div style="width:100%;height:100%;">
    <el-container class="main-contanier">
      <el-header style="height:100px;">
        <content-header></content-header>
      </el-header>
      <el-container>
        <el-aside style="width:280px;">
          <slideMenu></slideMenu>
        </el-aside>
        <el-main  class="content-contanioer">
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import slideMenu from '@/views/user/Menu.vue'
import contentHeader from '@/views/template/contentHeader.vue'
export default {
  components: {
    slideMenu,
    contentHeader
  }
}
</script>
<style lang="scss" scoped>
.content-contanioer{
  padding-top: 0 !important;
  background-color: #fff;
  width: 100%;
  min-width: 1180px;
}

.main-contanier {
  width: 100%;
  height: 100%;
}
.el-submenu .el-menu-item {
  min-width: 280px !important;
}
body {
  background: #eff3f6;
}
.el-aside {
  background: #2a58ad;
  width: 14.583333%;
  min-width: 280px;
  // overflow-y:hidden;
  overflow-x: hidden;
}
.el-container {
  // position: fixed;
  // top: 0;
  // right: 0;
  // bottom:0;
  overflow-y: scroll;
  // overflow-x:hidden;
}
.el-header {
  padding: 0;
  /*height: 100%;*/
}
</style>
