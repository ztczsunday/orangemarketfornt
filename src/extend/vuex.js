import vuex from 'vuex';
import Vue from './vueFactory';

Vue.use(vuex);

const state = new vuex.Store({
    state: {
        title: ''
    },
    getters: {},
    actions: {},
    mutations: {
        changeTitle(state, payload) {
            this.title = payload;
        }
    }
});

Vue.prototype.$store = state;

export default state;
