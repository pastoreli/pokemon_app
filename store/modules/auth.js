export default {
  
  state: {
    token: null
  },
  actions: {
    setToken( {commit}, token ) {
      commit( 'SET_TOKEN', token )
    },
    getToken( {commit} ) {
      commit( 'GET_TOKEN', )
    }
  },
  mutations: {
    SET_TOKEN( state, token ) {
      state.token = token
    },
    GET_TOKEN( state ) {
      return state.token
    }
  }

}