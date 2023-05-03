import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage.vue';
import ProductDetailPage from '../views/ProductDetailPage.vue';
import ProductsPage from '../views/ProductsPage.vue';
import NotFoundPage from '../views/NotFoundPage.vue';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/products',
    name: 'Products',
    component: ProductsPage,
  }, {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  }, {
    path: '/cart',
    name: 'Cart',
    component: CartPage,
  }, {
    path: '/',
    redirect: '/products',
  }, {
    path: '*',
    component: NotFoundPage,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/EditComponent')
  },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/ListComponent')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
