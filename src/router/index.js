import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import about from '@/pages/about'
import contact from '@/pages/contact'
import gallery from '@/pages/gallery'
import single from '@/pages/single'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/single',
      name: 'single',
      component: single
    }

  ]
})
