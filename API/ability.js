import axios from './axios';
const route = '/ability';

export default {
  getAbilityById: id => axios.get(`${route}/${id}`)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return {}
  })
}