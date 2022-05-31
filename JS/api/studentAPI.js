import axiosClient from './axiosClient.js'

const studentAPI = {

  getAllStudent(params) {
    const url = '/students';
    return axiosClient.get(url,{ params })
  },

  getStudentByID(id) {
    const url = `/students/${id}`;
    return axiosClient.get(url);
  },

  addAStudent(data) {
    const url = '/students';
    return axiosClient.post(url,data);
  },

  updateStudentByID(data) {
    const url = `/students/${data.id}`;
    return axiosClient.patch(url,data);
  },

  removeStudentByID(id) {
    const url = `/students/${id}`;
    return axiosClient.delete(url);
  }

}

export default studentAPI;