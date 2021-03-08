import Vue from './vueFactory'
import vuex from 'vuex'

Vue.use(vuex);

const state =  new vuex.Store({
    state: {
        count: 0
    }
});
export default state;
