import axios from 'axios';
// const route = 'http://localhost:8080';
// const route = 'http://localhost:8000';
const route = 'https://poke-api-fatec.herokuapp.com';

const checkIsExistToken = () => {
  const accessToken = localStorage.getItem('accessToken')
  // console.log(accessToken)
  return accessToken || ''
}

export default {
  create: () => axios.create({
    baseURL: route,
    timeout: 10000,
    headers: {
      Authorization: `${checkIsExistToken()}`,
      
    }
  })
}
