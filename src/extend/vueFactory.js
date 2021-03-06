import Vue from 'vue';

/* 设置不是生产环境 */
Vue.config.productionTip = false;
/* 引入ElementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
/* 引入AntDesignVue */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(ElementUI);
Vue.use(Antd);

/* 引入Ant的组件 */
import { Form } from "ant-design-vue";
import { Col } from "ant-design-vue";
import { Row } from "ant-design-vue";

Vue.component(Form.name, Form);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
/* ****END**** */

export default Vue;