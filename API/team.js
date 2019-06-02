import axios from './axios';
const route = '/user/team';

export default {
  createTeam: (name) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log('ax', accessToken)

    return axios.create().post(route, JSON.stringify(name))
    .then(res => res.data)
    .catch(error => {
    console.log('error', error.headers);
    return null;
  })
  }
}