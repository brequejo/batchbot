import { useState, useEffect } from 'react';
import { LocalStorage } from '@services/LocalStorage/LocalStorage.service.js';
import RecipesService from '@services/recipes/recipes.service';

const UserRecipesPage = () => {
  const [userRecipes, setUserRecipes] = useState(null);

  useEffect(() => {
    async function getRecipes() {
      const loggedUser = JSON.parse(LocalStorage.get('user'));
      const recipeList = await RecipesService.getUserRecipes(loggedUser.userId);
      setUserRecipes(recipeList.data);
    }
    getRecipes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Mis recetas</h1>
        <ul>
          {userRecipes?.map((recipe) => {
            return (
              <li key={recipe._id}>
                {recipe.name} {recipe.description}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserRecipesPage;
