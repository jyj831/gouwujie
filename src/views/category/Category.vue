<template>
  <div>
    <NavBar class="cate-nav">
      <template v-slot:center>
        商品分类
      </template>
    </NavBar>
    <CateLeft></CateLeft>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import CateLeft from "../../components/content/category/CateLeft";

  export default {
    name: "Category",
    components:{
      NavBar,CateLeft
    }
  }
</script>

<style scoped>
  .cate-nav{
    background: var(--color-tint);
    color: #fff;
  }
</style>
