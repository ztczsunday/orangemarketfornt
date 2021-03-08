import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/components/frame/Login';
import Market from '@/components/frame/Market';
import Register from '@/components/frame/Register';

const routes = [
    { path: '/', name: '登录界面', component: Login },
    { path: '/register', name: '注册界面', component: Register },
    { path: '/market', name: 'OrangeSoft商城欢迎您！！！', component: Market }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

export default router;
