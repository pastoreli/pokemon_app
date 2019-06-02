import axios from './axios';
const route = '/user';

export default {
  createUser: (data) => {
    return axios.create().post(route, JSON.stringify(data), {
      headers: {
        'Content-Type': 'Application/Json'
      }
    })
    .then( res => {
      return res.headers['authorization']
    }).catch( err => {
      console.log('error ', err)
      return false;
    })
  }
}