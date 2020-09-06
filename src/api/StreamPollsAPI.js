import axios from 'axios';

const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000',
};

export default axios.create(axiosConfig);
