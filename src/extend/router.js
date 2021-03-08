import Login from "@/components/frame/Login";
import VueRouter from "vue-router";
import Vue from 'vue';

const routes = [
    { path: '/', name: '登录界面', component: Login }
];

const router = new VueRouter({
    routes
});

Vue.use(VueRouter);

export default router;