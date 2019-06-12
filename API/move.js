import axios from './axios';
const route = '/move';

export default {
  getMoveById: id => axios.create().get(`${route}/${id}`)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return {}
  })
}