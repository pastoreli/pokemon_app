import axios from './axios';
const route = '/user/team';

export default {
  createTeam: (name) => {
    return axios.create().post(route, name)
    .then(res => res.data)
    .catch(error => {
      console.log('error', error.headers);
      return null;
    })
  },
  savePokemonTeam: (teamId, pokemon) => {
    return axios.create().post(`${route}/${teamId}/pokemon`, pokemon)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log('error', error.headers);
      return null;
    })
  }
}