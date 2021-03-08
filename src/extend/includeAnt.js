/* 引入Ant的组件 */
import Antd, { Col, Form, message, Modal, Row } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
/* ****END**** */

/* Vue中引入Ant的组件 */
Vue.use(Antd);

Vue.component(Form.name, Form);
Vue.component(Col.name, Col);
Vue.component(Row.name, Row);
Vue.component(Modal.name, Modal);

Vue.prototype.antMessage = message;
/* ******END****** */
