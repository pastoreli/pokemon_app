import Vuex from 'vuex';

import { auth } from './modules'


export default () => {
  return new Vuex.Store({
    state: {
      counter: 0
    },
    modules: {
      auth
    }
  })
}