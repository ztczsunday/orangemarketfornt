import Vue from 'vue';
import VueRouter from 'vue-router';
import state from "@/extend/vuex";

/* 设定router的内容 */
const routes = [
    { path: '/', name: '商城主页', component: () => import('@/components/frame/Market'), meta: { title: '商城页面' } },
    { path: '/Mails', name: '私聊界面', component: () => import('@/components/frame/Mails'), meta: { title: '站内信' } },
    { path: '/PersonalInfo', name: '个人信息', component: () => import('@/components/frame/PersonalInfo'), meta: { title: '个人信息' } },
    { path: '/SearchResult', name: '搜索结果', component: () => import('@/components/frame/SearchResult'), meta: { title: '搜索结果' } },
    { path: '/Login', name: '登录界面', component: () => import('@/components/frame/Login'), meta: { title: '登录页面' } },
    { path: '/History', name: '浏览记录', component: () => import('@/components/frame/Histories'), meta: { title: '浏览记录' } },
    { path: '/Register', name: '注册页面', component: () => import('@/components/frame/Register'), meta: { title: '注册页面' } },
    { path: '/ProductDetail', name: '商品详情', component: () => import('@/components/frame/ProductDetail'), meta: { title: '商品详情' } },
    { path: '/CommentsDetail', name: '评价', component: () => import('@/components/frame/CommentsDetail'), meta: { title: '评价' } },
    { path: '/Shop', name: '商铺界面', component: () => import('@/components/frame/Shop'), meta: { title: '商铺页面' } },
    { path: '/OrderManage', name: '订单管理', component: () => import('@/components/frame/OrderManage'), meta: { title: '订单管理' } },
    { path: '/OrderDetail', name: '订单详情', component: () => import('@/components/frame/OrderDetail'), meta: { title: '订单详情' } },
    { path: '/ManageCenter', name: '管理中心', component: () => import('@/components/frame/ManageCenter'), meta: { title: '管理中心' } },
    { path: '/BuildGoods', name: '新建商品', component: () => import('@/components/frame/BuildGoods'), meta: { title: '新建商品' } },
    { path: '/BuildShop', name: '新建商铺', component: () => import('@/components/frame/BuildShop'), meta: { title: '新建商铺' } },
    { path: '/SetOrder', name: '下单', component: () => import('@/components/frame/SetOrder'), meta: { title: '下单' } },
    { path: '/Favorite', name: '收藏夹', component: () => import('@/components/frame/Favorite'), meta: { title: '收藏夹' } },
    { path: '/RouterList', name: '页面列表', component: () => import('@/components/frame/RouterList'), meta: { title: '页面列表' } }
];

/* 设定MainRoutes，主页中的几个Router */
const mainRoutes = [''].concat(routes.slice(0, 4).map(each => each.meta.title));

/* 由router数组，创建router对象 */
const router = new VueRouter({
    routes
});

/* 引入VueRouter到Vue中 */
Vue.use(VueRouter);

/* 路由修改时，修改标题 */
router.beforeEach((to, from, next) => {
    if (state.state.loginstate === false && to.fullPath !== '/login') {
        state.commit('changeTitle', '登录界面');
        document.title = '登录界面';
        next('/login');
    } else {
        state.commit('changeTitle', to.meta.title);
        document.title = to.meta.title;
        next();
    }
});

/* 除去路由重定向到自己时，会引发的错误 */
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/* 导出Routes和MainRoutes，用于路由判断 */
export {
    routes,
    mainRoutes
};

export default router;
