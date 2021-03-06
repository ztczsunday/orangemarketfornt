import Vue from '@/extend/vueFactory'
import router from "@/util/router";
import App from './App.vue'

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
