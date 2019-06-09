import axios from './axios';
const route = '/auth';

export default {
  signIn: async (data) => {
    // console.log(JSON.stringify(data))
    return axios.create().post(route, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then( res => {
      // console.log('login', res)
      return res.headers['authorization']
    }).catch( err => {
      console.log('error ', err)
      return false;
    })
  }
}