/* 引入Vue、子工厂 */
import Vue from 'vue';
import '@/extend/inclueEui';
import '@/extend/includeAnt';
import '@/extend/includeVant';
import VueCookies from 'vue-cookies';

/* 设置不是生产环境 */
Vue.config.productionTip = false;

/* 引入vue-cookies */
Vue.use(VueCookies);

/* 将工厂包装好的Vue返回 */
export default Vue;
