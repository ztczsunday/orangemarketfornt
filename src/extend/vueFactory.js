import Vue from 'vue';

/* 设置不是生产环境 */
Vue.config.productionTip = false;

import includeAnt from "@/extend/includeAnt";
import inclueEleme from "@/extend/inclueEleme";

includeAnt(Vue);
inclueEleme(Vue);

export default Vue;