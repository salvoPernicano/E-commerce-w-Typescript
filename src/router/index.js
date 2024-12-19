import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductList from '@/views/ProductList.vue'
import ShowProduct from '@/views/ShowProduct.vue'
import NotFound from '@/views/NotFound.vue'
import AboutView from '@/views/AboutView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/products/:page(\\d+)?', // Solo numeri accettati come pagina
      name: 'productsList',
      component: ProductList,
      props: (route) => ({ page: parseInt(route.params.page, 10) || 1 }),
    },
    {
      path: '/product/:id(\\d+)', // Solo numeri accettati come ID
      name: 'ProductDetails',
      props: true,
      component: ShowProduct,
    },
    // Catch-all per gestire percorsi non validi
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: NotFound,
    },
  ],
})

export default router
