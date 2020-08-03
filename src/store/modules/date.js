import api from 'axios'

const apiUrl = 'http://2bug.ru'
// const apiUrl = 'http://194.177.21.46'
const apiPath = '/api/v1'

export default {
  state: {
    date: ''
  },
  actions: {
    fetchDate: async (context) => {
      let { data } = await api.get(`${apiUrl}${apiPath}/date`)
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
