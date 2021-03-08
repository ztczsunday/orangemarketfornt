/* 引入ElementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vue from 'vue'
/* 引入Element的组件 */
import { Loading } from "element-ui";
import { Message } from "element-ui";
import { MessageBox } from "element-ui";
/* ******END****** */
Vue.use(ElementUI);


Vue.use(Loading.directive);

Vue.prototype.elLoading = Loading.service;
Vue.prototype.elMsgbox = MessageBox;
Vue.prototype.elAlert = MessageBox.alert;
Vue.prototype.elConfirm = MessageBox.confirm;
Vue.prototype.elPrompt = MessageBox.prompt;
Vue.prototype.elNotify = Notification;
Vue.prototype.elMessage = Message;
