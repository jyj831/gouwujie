<template>
  <div>
    <ul class="u1">
      <li class="l1" v-for="item in listList">
        <a :href="item.link">
          <img :src="item.show.img" alt="">
          <p class="text1">{{item.title}}</p>
        </a>

      </li>
    </ul>
  </div>
</template>

<script>
  import {getHomedata} from "../../../network/home";

  export default {
    name: "Homelx",
    data(){
      return{
        listList:null
      }
    },
    created() {

      getHomedata().then(res=> {
        // this.result=res
        this.listList=res.data.list
        console.log(res)

      })
    },
  }
</script>

<style scoped>
 .u1{
   width: 100%;
   margin-top: 10px;
   padding-bottom: 50px;
   list-style: none;
   display: flex;
   justify-content: space-around;
   flex-wrap: wrap;
   /*align-items: stretch;*/
 }
  .l1{
    width: 45%;
  }
  .l1 img{
    width: 100%;
    border-radius: 5px;
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
