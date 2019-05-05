import axios from 'axios';

// const route = 'http://localhost:8080';
const webRoute = 'https://poke-tonhao.herokuapp.com';

export default axios.create({
  baseURL: webRoute,
  timeout: 100000000,
})
