import Vue from 'vue';
import VueRouter from 'vue-router';
import state from "@/extend/vuex";
import Mails from "@/components/frame/Mails";
import Login from '@/components/frame/Login';
import Market from '@/components/frame/Market';
import Register from '@/components/frame/Register';
import PersonalInfo from "@/components/frame/PersonalInfo";
import Histories from "@/components/frame/Histories";
import ProductDetail from "@/components/frame/ProductDetail";
import CommentsDetail from "@/components/frame/CommentsDetail";
import Shop from "@/components/frame/Shop";
import OrderManage from "@/components/frame/OrderManage";
import OrderDetail from "@/components/frame/OrderDetail";
import ManageCenter from "@/components/frame/ManageCenter";
import BuildGoods from "@/components/frame/BuildGoods";
import BuildShop from "@/components/frame/BuildShop";
import SetOrder from "@/components/frame/SetOrder";
import SearchResult from "@/components/frame/SearchResult";

/* 设定router的内容 */
const routes = [
    { path: '/', name: '商城主页', component: Market, meta: { title: '商城页面' } },
    { path: '/mails', name: '私聊界面', component: Mails, meta: { title: '站内信' } },
    { path: '/personalInfo', name: '个人信息', component: PersonalInfo, meta: { title: '个人信息' } },
    { path: '/searchResult', name: '搜索结果', component: SearchResult, meta: { title: '搜索结果' } },
    { path: '/login', name: '登录界面', component: Login, meta: { title: '登录页面' } },
    { path: '/history', name: '浏览记录', component: Histories, meta: { title: '浏览记录' } },
    { path: '/register', name: '注册页面', component: Register, meta: { title: '注册页面' } },
    { path: '/ProductDetail', name: '商品详情', component: ProductDetail, meta: { title: '商品详情' } },
    { path: '/CommentsDetail', name: '评价', component: CommentsDetail, meta: { title: '评价' } },
    { path: '/Shop', name: '商铺界面', component: Shop, meta: { title: '商铺页面' } },
    { path: '/OrderManage', name: '订单管理', component: OrderManage, meta: { title: '订单管理' } },
    { path: '/OrderDetail', name: '订单详情', component: OrderDetail, meta: { title: '订单详情' } },
    { path: '/ManageCenter', name: '管理中心', component: ManageCenter, meta: { title: '管理中心' } },
    { path: '/BuildGoods', name: '新建商品', component: BuildGoods, meta: { title: '新建商品' } },
    { path: '/BuildShop', name: '新建商铺', component: BuildShop, meta: { title: '新建商铺' } },
    { path: '/SetOrder', name: '下单', component: SetOrder, meta: { title: '下单' } },
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
    state.commit('changeTitle', to.meta.title);
    document.title = to.meta.title;
    next();
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
