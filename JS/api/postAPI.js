import { axiosClient } from './axiosClient.js'

const postAPI = {
  
  getAllPost(params) {
    const url = '/posts';
    return axiosClient.get(url,{ params })
  },

  getPostByID(id) {
    const url = `/posts/${id}`;
    return axiosClient.get(url);
  },

  addNewPost(data) {
    const url = '/posts';
    return axiosClient.post(url,data)
  },

  updatePost(data) {
    const url = `/posts/${data.id}`;
    return axiosClient.patch(url,data);
  },

  removePost(id) {
    const url = `/posts/${id}`;
    return axiosClient.delete(url);
  }
}

export default postAPI;