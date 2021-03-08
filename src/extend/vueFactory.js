import Vue from 'vue';
import Vuex from 'vuex';
import "@/extend/inclueEui";
import "@/extend/includeAnt";
/* 设置不是生产环境 */
Vue.config.productionTip = false;
/* 设置引入Vuex */
Vue.use(Vuex);

export default Vue;
