import vuex from 'vuex';
import Vue from './vueFactory';

Vue.use(vuex);

const state = new vuex.Store({
    state: {},
    getters: {},
    actions: {},
    mutations: {}
});

export default state;
