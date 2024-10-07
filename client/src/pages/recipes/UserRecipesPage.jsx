import { useState, useEffect } from 'react';
import { LocalStorage } from '@services/LocalStorage/LocalStorage.service.js';
import RecipesService from '@services/recipes/recipes.service';
import RecipeCard from '../../components/RecipeCard/RecipeCard.component';

const UserRecipesPage = () => {
  const [userRecipes, setUserRecipes] = useState(null);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function getRecipes() {
      const recipeList = await RecipesService.getUserRecipes(loggedUser.userId);
      setUserRecipes(recipeList.data);
    }
    const loggedUser = JSON.parse(LocalStorage.get('user'));
    setUserName(loggedUser.userName);
    getRecipes();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Mis recetas</h1>
      <ul className="flex flex-row items-center justify-center">
        {userRecipes?.map((recipe) => {
          return (
            <li key={recipe._id} className="mx-4">
              <RecipeCard
                title={recipe.name}
                author={userName}
                description={recipe.description}
                thumbnail={recipe.image}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserRecipesPage;
