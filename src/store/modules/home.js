// initial state
const state = {
  home1: '',
  home2: ''
}

// getters
const getters = {}

// actions
// 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
const actions = {
  getAllProducts ({ state, commit, rootState }, params) {
    commit('setProducts', 1)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
