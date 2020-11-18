<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center">购物街</slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.nav-bar{
  display: flex;
  line-height: 44px;
  position: fixed;top: 0;left: 0;right: 0;
  z-index: 9;
  /*background: lightblue;*/
}
  .left,.right{
    width: 60px;
    /*background: lightcoral;*/
  }
  .center{
    flex: 1;
    /*background: red;*/
    color: #fff;
    text-align: center;
  }
</style>
