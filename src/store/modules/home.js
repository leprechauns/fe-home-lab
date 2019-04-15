import Vue from 'vue'
import Home from '@/model/home'

let homeApi = new Home()

const state = {
  info: {}
}

const actions = {
  async fetchBasisInfo ({ commit, state }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'info' })
    return r;
  },
  async fetchList ({ commit, state }, { target, page, perpage }) {
    state.appLoad = true
    let r = await homeApi.get({ target, data: `${page}/${perpage}` })
    return r;
  },
  async fetchNoticeInfo ({ commit, state }, { id }) {
    state.appLoad = true
    let r = await homeApi.get({ target: 'notice', data: id })
    return r;
  }
}

const mutations = {
  setInfo (state, { info }) {
    if (info) {
      state.info = {}
      info.map(item => {
        Vue.set(state.info, item.id, item)
      })
    }
  }
}

export default {
  state,
  actions,
  mutations
}
