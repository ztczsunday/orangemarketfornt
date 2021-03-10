import Vue from '@/extend/vueFactory';
import state from '@/extend/vuex';
import router from "@/extend/router";
import App from './App'

new Vue({
    render: h => h(App),
    state,
    router
}).$mount('#app')

