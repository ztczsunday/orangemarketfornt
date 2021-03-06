import Vue from '@/extend/vueFactory'
import router from "@/extend/router";
import App from './App'

new Vue({
    render: h => h(App),
    router
}).$mount('#app')
