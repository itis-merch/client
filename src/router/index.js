import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductView from '../views/ProductView.vue'
import CategoryView from '../views/CategoryView.vue'
import CartView from '../views/CartView.vue'
import OrdersView from '../views/OrdersView.vue'
import loginView from "@/views/LoginView.vue";
import RegistrationView from "@/views/RegistrationView.vue";
import AdminPanelView from '@/views/AdminPanelView.vue'
import EditCategoryView from '@/views/EditCategoryView.vue'
import AddCategoryView from '@/views/AddCategoryView.vue'
import EditProductView from '@/views/EditProductView.vue'
import AddProductView from '@/views/AddProductView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/products/:id',
      name: 'productPage',
      component: ProductView
    }, 
    {
      path: '/category/:id', 
      name: 'productCategoryPage',
      component: CategoryView,
      props: true
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/orders',
      name: 'ordersPage',
      component: OrdersView
    },
    {
      path: '/login',
      name: 'login',
      component: loginView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/admin-panel',
      name: 'admin-panel',
      component: AdminPanelView
    },
    {
      path: '/admin-panel/category/:id',
      name: 'edit-category',
      component: EditCategoryView
    },
    {
      path: '/admin-panel/category',
      name: 'add-category',
      component: AddCategoryView
    },
    {
      path: '/admin-panel/product/:id',
      name: 'edit-product',
      component: EditProductView
    },
    {
      path: '/admin-panel/product',
      name: 'add-product',
      component: AddProductView
    }
  ]
})

export default router

