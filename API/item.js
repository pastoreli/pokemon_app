import axios from './axios';
const route = '/item';

export default {
  getAllItems: (page = 0) => axios.create().get(`${route}?page=${page}`)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return [];
  })
}