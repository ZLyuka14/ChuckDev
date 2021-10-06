import axios from 'axios';
import api from '../common/constants/api';

/**
 * Here i create axios instance to work with requests.
 */
const instance = axios.create({
  baseURL: api.baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.response.use((res) => res.data);

export default instance;
