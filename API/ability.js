import axios from './axios';
const route = '/ability';

export default {
  getAbilityById: id => axios.create().get(`${route}/${id}`)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return {}
  })
}