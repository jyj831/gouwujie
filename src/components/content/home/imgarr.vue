<template>
  <div class="box1">
    <div class="box2" v-for="item in aaa">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <p class="text1">{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "imgarr",
    props:{
      aaa:{
        type:Array
      }
    }
  }
</script>

<style scoped>
  .box1{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
  }
  .box2{
    text-align: center;
  }
  .box2 img{
    width: 90%;
    border-radius: 50%;
  }
  .text1{
    font-size: 12px;
    text-align: center;
  }
</style>
