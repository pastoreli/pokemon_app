import axios from 'axios';

const route = 'http://localhost:8080';

export default axios.create({
  baseURL: route,
  timeout: 100000000,
})
