import {createRouter,createWebHistory} from 'vue-router'

import Home from './pages/home'
import Product from './pages/product'
import Transaction from './pages/transactions'
import TransactionDetail from './pages/transactions-detail'
import NotFound404 from './pages/errors/404.vue'
const routes=[
    {
        path:"/",
        component:Home
    },
    {
        path:"/product",
        component:Product
    },
    {
        path:"/transactions",
        name:"transaction-route",
        component:Transaction
    },
    {
        path:"/transactions/:id(\\d+)?",
        name:"transaction-details-route",
        component:TransactionDetail
    },
    {
        path:"/ts",
        redirect:"/transactions"
    },
    {
        path:'/:pathMatch(.*)*',
        name:'not-found',
        component:NotFound404
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes,
    linkActiveClass:"active-nav",
    linkExactActiveClass:"exact-active"
})
export default router;