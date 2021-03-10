import vuex from 'vuex';
import Vue from './vueFactory';

Vue.use(vuex);

const state = new vuex.Store({
    state: {
        title: 'HELLO'
    },
    getters: {
    },
    actions: {},
    mutations: {}
});

Vue.prototype.$store = state;

export default state;
