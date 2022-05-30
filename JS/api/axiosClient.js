import axios from 'axios';

// Tạo ra axios custom
const axiosClient = axios.create({
  baseURL:'https://js-post-api.herokuapp.com/api/',
  headers:{
    'Content-Type':'application/json'
  }
})
export default axiosClient;