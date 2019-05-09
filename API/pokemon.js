import axios from './axios';

const route = '/pokemon';

export default {
  getAllPokemon: async  (page = 1) => {
    return axios.get(`${route}?page=${page}`)
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