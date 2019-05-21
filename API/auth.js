import axios from './axios';
const route = '/auth';

export default {
  signIn: async (data) => {
    console.log(JSON.stringify(data))
    return axios.post(route, JSON.stringify(data), {
        headers: {
          'Content-Type': 'Application/Json'
        }
      })
      .then( res => {
      console.log('login', res)
      return true;
    }).catch( err => {
      console.log('error ', err)
      return false;
    })
  }
}