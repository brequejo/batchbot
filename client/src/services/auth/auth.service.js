import axios from 'axios';
import { LocalStorage } from '@services/LocalStorage/LocalStorage.service.js';

const API_URL = 'http://localhost:5555';

const register = (email, password) => {
  const url = `${API_URL}/users/register`;
  return axios.post(url, {
    email,
    password,
  });
};

const login = (email, password) => {
  const url = `${API_URL}/users/login`;
  return axios
    .post(
      url,
      {
        email,
        password,
      },
      {
        withCredentials: true,
      }
    )
    .then((res) => {
      LocalStorage.set('user', {
        email: res.data.email,
        userName: res.data.userName,
        profileImage: res.data.profileImage,
      });
      return res.data;
    });
};

const AuthService = {
  register,
  login,
};

export default AuthService;
