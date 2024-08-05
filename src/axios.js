import axios from 'axios'
import { baseUrl } from './constants/constants'
const axiosInstance = axios.create({
  baseURL: baseUrl,
});
export default axiosInstance