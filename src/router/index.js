import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import SeedProducers from '@/components/SeedProducers'
import SeedProducersAdd from '@/components/SeedProducersAdd'
import SeedProducersEdit from '@/components/SeedProducersEdit'
import SeedProducersDelete from '@/components/SeedProducersDelete'

import NotFound from '@/components/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },

    { path: '/seedproducers', name: 'SeedProducers', component: SeedProducers },
    { path: '/seedproducers/add', name: 'SeedProducersAdd', component: SeedProducersAdd },
    { path: '/seedproducers/:seed_producer_id/edit', name: 'SeedProducersEdit', component: SeedProducersEdit },
    { path: '/seedproducers/:seed_producer_id/delete', name: 'SeedProducersDelete', component: SeedProducersDelete },

    { path: '*', component: NotFound }
  ]
})
