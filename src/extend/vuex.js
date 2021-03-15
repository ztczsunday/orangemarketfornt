import vuex from 'vuex';
import Vue from './vueFactory';

Vue.use(vuex);

const state = new vuex.Store({
    state: {
        title: '',
        user: {
            tel: 15770742170,
            password: 114514
        }
    },
    getters: {},
    actions: {
        async doLogin() {
            const { $ } = await import("@/util/ajax");
            const params = new FormData();
            params.append("username", this.state.user.tel);
            params.append("password", this.state.user.password);
            console.log(await $.post('/login', params)) ;

        }
    },
    mutations: {
        changeTitle(state, payload) {
            this.title = payload;
        }
    }
});

Vue.prototype.$store = state;

export default state;
