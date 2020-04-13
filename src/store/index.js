/* eslint-disable no-unused-expressions */
import Vue from 'vue';
import Vuex from 'vuex';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /** 全局缓存数组 */
    keepAliveComps: [],
  },
  mutations: {
    [types.ADD_KEEP_ALIVE_COMP](state, component) {
      !state.keepAliveComps.includes(component)
        && state.keepAliveComps.push(component);
    },
    [types.DELETE_KEEP_ALIVE_COMPS](state, components) {
      if (Array.isArray(components)) {
        state.keepAliveComps = state.keepAliveComps.filter(
          (name) => !components.includes(name),
        );
      }
    },
  },
});
