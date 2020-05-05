import { getExample } from 'service/homeApi.js'
import { Dialog } from 'vant'
// initial state
const state = {
  home1: 'test——home1',
  home2: ''
}

// getters
const getters = {
  home3 (state) {
    return 'test--home3'
  }
}

// actions
// 对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState
const actions = {
  getExample ({ state, commit, rootState }, params) {
    getExample().then(res => {
      console.log(res)
    }).catch(e => {
      console.log(e)
    })
    commit('getExample', 1)
  }
}

// mutations
const mutations = {
  getExample (state, params) {
    Dialog.alert({
      title: '通过actions使用mutations',
      message: '成功,传参为：' + params
    }).then(() => {
      // on close
    })
  },
  handleMutations (state, params) {
    Dialog.alert({
      title: '直接使用mutation',
      message: '成功,传参为：' + params
    }).then(() => {
      // on close
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
