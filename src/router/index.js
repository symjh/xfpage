import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Product from '@/components/Product'
import GouWuChe from '@/components/GouWuChe'
import SumBand from '@/components/SumBand'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/product',
      name: 'Product',
      component: Product
    },
    {
      path: '/gouwuche',
      name: 'GouWuChe',
      component: GouWuChe
    },
    {
      path: '/sumband',
      name: 'SumBand',
      component: SumBand
    }
  ]
})
