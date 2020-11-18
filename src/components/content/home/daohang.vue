<template>
  <div>
    <!--<ul class="ul1">
      <li class="li1"
          :key="index"
          :class="active==index ? 'activeClass':''"
          v-for="(item,index) in datas"
          @click="changeColor(index)">
        {{item.xuanze}}
        </li>
    </ul>-->
    <ul class="ul1">
      <li class="li1" ><router-link class="li1" active-class="activeClass" to="/home/lx" >流行</router-link></li>
      <li class="li1" ><router-link class="li1" active-class="activeClass" to="/home/xk">新款</router-link></li>
      <li class="li1" ><router-link class="li1" active-class="activeClass" to="/home/jx">精选</router-link></li>
    </ul>

    <router-view></router-view>
  </div>

</template>

<script>


  export default {
    name: "daohang",
    data(){
      return{
        listList:null
      }
    },
    components:{

    },
    created() {


    },
    methods:{
     /* changeColor(index){
        // console.log(index)
        this.active=index
        if(index==0){
          this.$router.push({ path: '/home/lx'});
        }else if(index==1){
          this.$router.push({ path: '/home/xk'});
        }else{
          this.$router.push({ path: '/home/jx'});
        }
      }*/
    }
  }
</script>

<style scoped>
.ul1{
  margin-top: 15px;
  list-style: none;
  width: 100%;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
}
  .ul1 .li1{
    text-align: center;
    width: 40px;
    padding: 2px 0;
  }
  .activeClass{
    color: var(--color-tint);
    border-bottom: 3px solid var(--color-tint);
  }

/*:class="{active:index==isShow}"*/
</style>
