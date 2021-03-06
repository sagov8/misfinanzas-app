import vueRouter from 'vue-router'
import register from './components/Register'
import login from './components/Login'
import welcome from './components/Welcome'
import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes : [
        {
            path: '/',
            name: "root",
            component:App,
            redirect: '/login'
        },
        {
            path: '/register',
            name: "register",
            component: register
        },
        {
            path: '/login',
            name: "login",
            component: login
        },
        {
            path: '/welcome/:username',
            name: "welcome",
            component: welcome
        },
    ]
})
export default router
