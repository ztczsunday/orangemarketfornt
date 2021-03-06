/* 引入AntDesignVue */
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


/* 引入Ant的组件 */
import { Form } from "ant-design-vue";
import { Col } from "ant-design-vue";
import { Row } from "ant-design-vue";
/* ****END**** */

/* Vue中引入Ant的组件 */
export default function (Vue) {
    Vue.use(Antd);

    Vue.component(Form.name, Form);
    Vue.component(Col.name, Col);
    Vue.component(Row.name, Row);
}
/* ****END**** */