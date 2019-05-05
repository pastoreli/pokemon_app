import axios from './axios';

const route = '/pokemon';

export default {
  getAllPokemon: async  () => {
    return axios.get(route)
    .then(res =>  res.data)
    .catch(error => {
      console.log('error', error);
      return [];
    })
  },
  getPokemonById: async (id) => {
    return axios.get(`${route}/${id}`)
    .then(res =>  res.data)
    .catch(error => {
      console.log('error', error);
      return [];
    })
  }
}