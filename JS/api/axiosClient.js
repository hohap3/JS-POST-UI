import axios from 'axios';

// Tạo ra axios custom
const axiosClient = axios.create({
  baseURL:'https://js-post-api.herokuapp.com/api/',
  headers:{
    'Content-Type':'application/json'
  }
});

//Interceptor
/**
 * Nếu ta có như cầu apply cho tất cả các request , hoặc response
 * Giúp xử lý thay đổi config trước khi gửi lên server
 * Trước khi trả về sẽ xử lý response sau đó trả về
 */

// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
  // Do something before request is sent
  
  // Check if user have been login
  const tokenAccess = localStorage.getItem('access_token');
  if(tokenAccess) {
    config.headers.Authorization = `Bearer ${tokenAccess}`
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axiosClient.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  
  return response.data;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default axiosClient;