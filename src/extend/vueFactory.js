/* 引入Vue、子工厂 */
import Vue from 'vue';
import '@/extend/inclueEui';
import '@/extend/includeAnt';
/* 设置不是生产环境 */
Vue.config.productionTip = false;

/* 将工厂包装好的Vue返回 */
export default Vue;
