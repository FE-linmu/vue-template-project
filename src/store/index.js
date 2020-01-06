import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import my from './modules/my'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    my,
    home
  },
  strict: debug
})
