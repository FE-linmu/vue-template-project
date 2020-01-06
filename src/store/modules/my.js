// initial state
const state = {
  my1: 'test-my1'
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    commit('setProducts', 1)
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
