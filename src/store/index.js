import Vue from 'vue'
import Vuex from 'vuex'

import Rooms from './rooms.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeDrawer: null,
    rooms: Rooms
  },
  getters: {
    rooms: state => {
      return state.rooms
    }
  },
  mutations: {
    setActiveDrawer (state, payload) {
      if (state.activeDrawer === payload) state.activeDrawer = null
      else state.activeDrawer = payload
    }
  },
  actions: {
    commitActiveDrawer (context, data) {
      context.commit('setActiveDrawer', data)
    }
  },
  modules: {
  }
})
