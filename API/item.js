import axios from './axios';
const route = '/item';

export default {
  getAllItems: () => axios.get(route)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return [];
  })
}