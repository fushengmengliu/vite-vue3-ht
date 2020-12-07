import {createRouter, createWebHistory} from 'vue-router'

const Index = () => import("../view/index.vue");
const Home = () => import("../view/home.vue");

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/home',
        name: 'Index',
        component: Index
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
