import axios from './axios';
const route = '/nature';

export default {
  getAllNatures: (page = 0) => axios.create().get(`${route}?page=${page}`)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return [];
  })
}