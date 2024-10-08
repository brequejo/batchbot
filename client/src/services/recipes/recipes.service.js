import axios from 'axios';

const API_URL = 'http://localhost:5555';

const getUserRecipes = (userId) => {
  const url = `${API_URL}/recipes?userId=${userId}`;
  return axios
    .get(url, {
      withCredentials: true,
    })
    .then((res) => {
      return res.data;
    });
};

const RecipesService = {
  getUserRecipes,
};

export default RecipesService;
