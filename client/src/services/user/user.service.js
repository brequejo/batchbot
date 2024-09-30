import axios from 'axios';
import { LocalStorage } from '@services/LocalStorage/LocalStorage.service.js';

const API_URL = 'http://localhost:5555';

const fetchUserData = () => {
    const user = JSON.parse(LocalStorage.get('user'));
    const url = `${API_URL}/users/${user.userId}`;

  return axios.get(url, {
    withCredentials: true,
  }).then((res) => {
    console.log('User data:', res.data);
    return res.data;
  }, (error) => {
    console.error('Error fetching user data:', error);
  });
};

const UserService = {
  fetchUserData
};

export default UserService;