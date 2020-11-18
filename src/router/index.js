import { createRouter, createWebHistory } from 'vue-router'


const Category=()=>import('../views/category/Category')
const Home=()=>import('../views/home/Home')
const Profile=()=>import('../views/profile/Profile')
const ShopCart=()=>import('../views/shopCart/ShopCart')
const Homelx=()=>import('../components/content/home/Homelx')
const Homejx=()=>import('../components/content/home/Homejx')
const Homexk=()=>import('../components/content/home/Homexk')
const c1=()=>import('../components/content/category/c1')
const c2=()=>import('../components/content/category/c2')



const routes = [
  {path:'',redirect:'/home'},
  {path:'/home',
    component:Home,
    children:[
      {path:'',redirect:'/home/lx'},
      {path:'lx',name:'Homelx',component:Homelx},
      {path:'jx',name:'Homejx',component:Homejx},
      {path:'xk',name:'Homexk',component:Homexk}
      ]
  },
  {path:'/category',
    component:Category,
    children: [
      {path:'',redirect: '/category/c1'},
      {path:'c1',component:c1},
      {path:'c2',component:c2}
    ]
  },
  {path:'/profile',component:Profile},
  {path:'/shopcart',component:ShopCart}
]


const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
