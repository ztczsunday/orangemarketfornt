import Vue from 'vue';
import VueRouter from 'vue-router';
import state from "@/extend/vuex";
import Login from '@/components/frame/Login';
import Market from '@/components/frame/Market';
import Register from '@/components/frame/Register';
import GoodsInfo from "@/components/frame/GoodsInfo";

/* 设定router的内容 */
const routes = [
    { path: '/login', name: '登录界面', component: Login, meta: { title: '登录页面' } },
    { path: '/register', name: '注册页面', component: Register, meta: { title: '注册页面' } },
    { path: '/goodsinfo', name: '商品详情', component: GoodsInfo, meta: { title: '商品详情' } },
    { path: '/', name: '商城主页', component: Market, meta: { title: '商城页面' } },

];

/* 由router数组，创建router对象 */
const router = new VueRouter({
    routes
});

/* 引入VueRouter到Vue中 */
Vue.use(VueRouter);

/* 路由修改时，修改标题 */
router.beforeEach((to, from, next) => {
    state.commit('changeTitle', to.meta.title);
    document.title = to.meta.title;
    next();
});

/* 除去路由重定向到自己时，会引发的错误 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router;
