import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from './Layout'

Vue.use(VueRouter)

function load (component) {
    return () => import(`./components/${component}.vue`)
}

const routes = [
    {
        path: '/',
        component: Layout,
        children: [
            { path: 'home', component: load('layout/home') },
            { path: 'blog', component: load('layout/blog') },
            { path: 'mine', component: load('layout/mine') }
        ]
    }
]

export default new VueRouter({
    // mode: 'history',
    routes
})
