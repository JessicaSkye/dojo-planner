import Vue from 'vue'
import Vuex from 'vuex'

import Rooms from './rooms.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeDrawer: { core: null },
    rooms: Rooms
  },
  getters: {
    rooms: state => {
      return state.rooms
    }
  },
  mutations: {
    setActiveDrawer (state, payload) {
      if (JSON.stringify(state.activeDrawer) === JSON.stringify(payload)) state.activeDrawer = { core: null }
      else state.activeDrawer = payload
    }
  },
  actions: {
    commitActiveDrawer (context, data) {
      context.commit('setActiveDrawer', data)
    },
    clearDrawer (context, data) {
      context.commit('setActiveDrawer', { core: null })
    }
  },
  modules: {
  }
})
