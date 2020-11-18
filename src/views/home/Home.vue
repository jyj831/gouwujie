<template>
  <div>
    <NavBar class="home-nav">
      <template v-slot:center>
        购物街
      </template>
    </NavBar>
    <SwiperA :banner="bannerList"></SwiperA>
    <imgarr :aaa="aaaList"></imgarr>
    <imgarr :aaa="aaaList"></imgarr>
    <daohang></daohang>

  </div>
</template>

<script>
  import NavBar from "../../components/common/navBar/NavBar";
  import {getHomeMultidata} from "../../network/home";
  import SwiperA from '../../components/common/SwiperA'
  import imgarr from "../../components/content/home/imgarr";
  import daohang from "../../components/content/home/daohang";

  export default {
    name: "Home",
    components: {
      NavBar,SwiperA,imgarr,daohang
    },
    data(){
      return{
        result:null,
        bannerList:null,
        aaaList:null
      }
    },
    created() {
      getHomeMultidata().then(res=> {
        // this.result=res
        this.bannerList=res.data.banner.list
        // console.log(res)
        this.aaaList=res.data.recommend.list
      })
    }
  }
</script>

<style scoped>
.home-nav{
  background: var(--color-tint);
  color: #fff;
}

</style>
