<template>
  <div class="c1">
    <ul class="u1">
      <li class="l1" v-for="item in listList">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <p class="text1">{{item.title}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getCatezzdata} from "../../../network/cate";

  export default {
    name: "c1",
    data(){
      return{
        listList:null
      }
    },
    created() {

      getCatezzdata().then(res=> {
        // this.result=res
        this.listList=res.data.list
        // console.log(res)

      })
    },
  }
</script>

<style scoped>
  .c1{
    padding: 50px 0 50px 100px;
  }
  .u1{
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .u1 .l1{
    text-align: center;
    width: 40%;
  }
  .l1 img{
    width: 100%;
  }
  .text1{
    padding: 5px;
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .text1:hover{
    color: red;
  }
</style>
