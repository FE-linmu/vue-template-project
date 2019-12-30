import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import my from './my'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  getters: {},
  modules: {
    home,
    my
  }
})
