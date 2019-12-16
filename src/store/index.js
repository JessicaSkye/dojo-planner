import Vue from 'vue'
import Vuex from 'vuex'

import Rooms from './rooms.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    activeDrawer: { core: null },
    rooms: Rooms,
    dojo: {
      rooms: [
        {
          status: 'built',
          category: 'halls',
          room: 'clan_hall',
          x: 0,
          y: -64
        },
        {
          status: 'built',
          category: 'halls',
          room: 'great_hall',
          x: -0,
          y: -320
        }
      ],
      settings: {
        clan_tier: 'ghost'
      }
    }
  },
  getters: {
    rooms: (state) => (category) => {
      if (!category || category === 'all') return state.rooms
      else return state.rooms[category]
    },
    dojo: (state) => {
      return state.dojo
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
