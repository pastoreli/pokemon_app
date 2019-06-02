import axios from './axios';
const route = '/team';

export default {
  createTeam: (name) => axios.create().post(route, name)
  .then(res => res.data)
  .catch(error => {
    console.log('error', error);
    return null;
  })
}