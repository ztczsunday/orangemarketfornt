/* 引入Element的组件 */
import ElementUI, { Loading, Message, MessageBox,Container, Header, Aside, Main, Footer} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
/* ******END****** */
Vue.use(ElementUI);

/* Vue中引入Eui的组件 */
Vue.use(Loading.directive);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);


Vue.prototype.elLoading = Loading.service;
Vue.prototype.elMsgbox = MessageBox;
Vue.prototype.elAlert = MessageBox.alert;
Vue.prototype.elConfirm = MessageBox.confirm;
Vue.prototype.elPrompt = MessageBox.prompt;
Vue.prototype.elNotify = Notification;
Vue.prototype.elMessage = Message;
/* ******END****** */
