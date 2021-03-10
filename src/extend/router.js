import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/frame/Login';
import Market from '@/components/frame/Market';
import Register from '@/components/frame/Register';
import state from "@/extend/vuex";

const routes = [
    { path: '/login', name: '登录界面', component: Login, meta: { title: '登录页面' } },
    { path: '/register', name: 'register', component: Register, meta: { title: '注册页面' } },
    { path: '/', name: '商城主页', component: Market, meta: { title: '商城页面' } }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

router.beforeEach((to, from, next) => {
    state.commit('changeTitle', to.meta.title);
    document.title = to.meta.title;
    next();
});


export default router;
