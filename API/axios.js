import axios from 'axios';

// const route = 'http://localhost:8080';
const route = 'http://localhost:8000';
// const route = 'https://poke-tonhao.herokuapp.com';

export default axios.create({
  baseURL: route,
  timeout: 10000,
})
