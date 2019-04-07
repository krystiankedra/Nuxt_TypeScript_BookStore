import Vuex from 'vuex';
import shared from './shared';
import registration from './registration';
import login from './login';
import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

const createStore = () => {
  return new Vuex.Store({
    modules: {
      shared,
      registration,
      login
    }
  });
};

export default createStore;