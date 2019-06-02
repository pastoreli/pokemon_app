import axios from './axios';
const route = '/pokemon';

export default {
  getAllPokemon: async  (page = 1) => {
    return axios.create().get(`${route}?page=${page}`)
    .then(res =>  res.data)
    .catch(error => {
      console.log('error', error);
      return [];
    })
  },
  getPokemonById: async (id) => {
    return axios.create().get(`${route}/${id}`)
    .then(res =>  res.data)
    .catch(error => {
      console.log('error', error);
      return [];
    })
  }
}