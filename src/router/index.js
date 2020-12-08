import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 防止下面调用push时进入死循环，换个函数
const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace
// 防止多次点击时，出现错误
VueRouter.prototype.push = function (location, onComplete, onAbort) {
    if (onAbort && onComplete) {
        return push.call(this, location, onComplete, onAbort)
    }
    return push.call(this, location, onComplete, () => { })
}
VueRouter.prototype.replace = function (location, onComplete, onAbort) {
    if (onAbort && onComplete) {
        return replace.call(this, location, onComplete, onAbort)
    }
    return replace.call(this, location, onComplete, () => { })
}

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Search from '../views/Search'
import Detail from '../views/Detail'
import ShopCart from '../views/ShopCart'
import AddCartSuccess from '../views/AddCartSuccess'

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isFooterHide: true
            }
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isFooterHide: true
            }
        },
        {
            // 命名路由
            name: 'search',
            path: '/search/:searchText?',
            component: Search,
        },
        {
            // 命名路由
            name: 'shopart',
            path: '/shopcart',
            component: ShopCart,
        },
        {
            // 命名路由
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: AddCartSuccess,
        },
        {
            path: '/detail/:goodsId?',
            component: Detail,
        }
    ],
    // 切换路由时，滚动条默认在顶部
    scrollBehavior() {
        return {
            x: 0,
            y: 0
        }
    }
})