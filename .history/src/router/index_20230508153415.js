import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtistsView from '../views/ArtistsView.vue'
import LayoutDefault from '@/layouts/default/LayoutDefault.vue'

Vue.component('LayoutDefault', LayoutDefault)

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      layout: 'default'
    }
  },
  {
    path: '/artists',
    name: 'ArtistsGallery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ArtistsView,
    meta: {
      layout: 'default'
    }
    }
]

const router = new VueRouter({
  routes
})

export default router
