<template>
  <div class="cl">
    <ul class="u1">
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c1" >正在流行</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c2" >上衣</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c3" >裤子</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c4" >裙子</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c5" >内衣</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c6" >女鞋</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c7" >男友</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c8" >包包</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c9" >运动</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c10" >配饰</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c11" >美妆</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c12" >个护</router-link></li>
      <li class="l1"><router-link class="r1" active-class="activeClass" to="/category/c13" >家居</router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CateLeft"
  }
</script>

<style scoped>
  .u1{
    margin-top: 45px;
    list-style: none;
    width: 100px;
    position: fixed;
    z-index: 1;
  }
  .u1 .l1{
    background: #f6f6f6;
    text-align: center;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: 18px;

  }
  .u1 .l1 .r1{
    display: block;
    width: 100%;
    height: 40px;
    padding: 0 6px 0 3px;
    /*border-left: 5px solid #f6f6f6;*/
  }
  .activeClass{
    color: var(--color-tint);
    background: #fff;
    border-left: 5px solid var(--color-tint);
  }
</style>
