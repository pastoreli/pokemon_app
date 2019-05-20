import axios from './axios';
const route = '/auth';

export default {
  signIn: async (data) => {
    console.log(JSON.stringify(data))
    return axios.get(route, JSON.stringify(data)).
    then( res => {
      console.log('login', res)
      return true;
    }).catch( err => {
      console.log('error ', err)
      return false;
    })
  }
}