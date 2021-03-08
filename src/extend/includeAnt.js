/* 引入AntDesignVue */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
/* 引入Ant的组件 */
import { Form } from "ant-design-vue";
import { Col } from "ant-design-vue";
import { Row } from "ant-design-vue";
import { message } from "ant-design-vue";
import { Modal } from "ant-design-vue";
/* ****END**** */

/* Vue中引入Ant的组件 */
Vue.use(Antd);

Vue.component(Form.name, Form);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(Modal.name, Modal);

Vue.prototype.antMessage = message;
/* ******END****** */