/* 引入Ant的组件 */
import { Button, Row, Col, Form, Icon, Checkbox, Input, message } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import Vue from 'vue';
/* ****END**** */

/* Vue中引入Ant的组件 */
// Vue.use(Antd);
Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(Icon);
Vue.use(Input);
Vue.use(Checkbox);

Vue.prototype.antMessage = message;
/* ******END****** */
