import axios from 'axios';
import { getAuth } from 'firebase/auth';

const axiosPublic = axios.create({
  baseURL: 'http://localhost:3000',
});

axiosPublic.interceptors.request.use(
  async (config) => {
    const auth = getAuth();          
    const user = auth.currentUser;  

    if (user) {
      const token = await user.getIdToken(); 
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
