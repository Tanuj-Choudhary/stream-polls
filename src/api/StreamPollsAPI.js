// Third Party Imports
import axios from 'axios';

// Axios Configuration for stream polls API
const axiosConfig = {
  baseURL: 'https://stream-polls.herokuapp.com/api/v1',
};

export default axios.create(axiosConfig);
