import api from 'axios'

const apiUrl = 'http://localhost:7500/api/v1'
// const apiUrl = 'http://5e11696584b3db001497635e.mockapi.io/api/v1'

export default {
  state: {
    date: ''
  },
  actions: {
    fetchDate: async (context) => {
      let { data } = await api.get(`${apiUrl}/date`)
      context.commit('addDate', data)
    },
  },
  getters: {
    getDate: state => state.date,
  },
  mutations: {
    addDate (state, data) {
      state.date = data
    },

  }
}
