import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import my from './my'
import createLogger from 'plugins/logger'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    my,
    home
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
