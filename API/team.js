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
  getAllTeams: (page = 0) => {
    return axios.create().get(`${route}?page=${page}`)
    .then(res => res.data)
    .catch(error => {
      console.log('error', error.headers);
      return [];
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
  },
  getPokemonByTeam: (teamId, pokemonId) => {
    return axios.create().get(`${route}/${teamId}/pokemon/${pokemonId}`)
    .then(res => res.data)
    .catch(error => {
      console.log('error', error)
      return null
    })
  },
  deleteTeam: (teamId) => {
    return axios.create().delete(`${route}/${teamId}`)
    .then(res => res.data)
    .catch(error => {
      console.log('error', error)
      return null
    })
  },

  editTeam: (teamId ,name) => {
    return axios.create().put(`${route}/${teamId}`, name)
    .then(res => res.data)
    .catch(error => {
      console.log('error', error.headers);
      return null;
    })
  },
  
  editPokemonTeam: (teamId, pokemonId) => {
    return axios.create().put(`${route}/${teamId}/pokemon/${pokemonId}`)
    .then(res => {
      console.log(res)
      return res.data
    })
    .catch(error => {
      console.log('error', error.headers);
      return null;
    })
  },

  deletePokemonTeam: (teamId, pokemonId) => {
    return axios.create().delete(`${route}/${teamId}/pokemon/${pokemonId}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log('error', error)
        return error;
      })
  }
}