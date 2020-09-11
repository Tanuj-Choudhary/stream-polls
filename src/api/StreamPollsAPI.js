// Third Party Imports
import axios from 'axios';

// Axios Configuration for stream polls API
const axiosConfig = {
  baseURL: 'http://127.0.0.1:8000/api/v1',
};

export default axios.create(axiosConfig);
