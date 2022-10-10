import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import localCache from '@/common/cache'

const Home = () => import('../views/home/home')
const Category = () => import('../views/category/category')
const Cart = () => import('../views/cart/cart')
const Detail = () => import('../views/detail/detail')
const Profile = () => import('../views/profile/profile')
const Login = () => import('../views/login/login')
const Setting = () => import('../views/profile/setting/setting')
const Collection = () => import('../views/profile/collection/collection')
const Address = () => import('../views/profile/address/address')
const Order = () => import('../views/profile/order/order')
const Sreach = () => import('../views/sreach/sreach')
const Chat = () => import('../views/chat/chat')
const Chatcontent = () => import('../views/chat/childComps/chat_content')
const Purchase = () => import('@/views/purchase/purchase.vue')
const Orderdetail = () =>
  import('@/views/profile/order/order_detail/order_detaile.vue')
// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '/orderdetail',
    component: Orderdetail
  },
  {
    path: '/purchase',
    component: Purchase
  },
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/carts',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (localCache.getCache('token') && localCache.getCache('user_id')) {
        next()
      } else {
        next('/login')
      }
    }
  },
  {
    path: '/detail/:iid',
    component: Detail
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/setting',
    component: Setting
  },
  {
    path: '/collection',
    component: Collection
  },
  {
    path: '/address',
    component: Address
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/sreach',
    component: Sreach
  },
  {
    path: '/chat',
    component: Chat
  },
  {
    path: '/chatcontent',
    component: Chatcontent
  }
]
const router = new VueRouter({
  routes
  // mode: 'history'
})

export default router
