import { Route, Routes } from 'react-router-dom';
import Login from '@pages/login/login.jsx';
import Home from '@pages/home/home.jsx';
import UserPage from '@pages/UserPage/userPage.jsx';
import UserRecipesPage from '@pages/recipes/UserRecipesPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users/:userId" element={<UserPage />} />
      <Route path="/my-recipes" element={<UserRecipesPage />} />
    </Routes>
  );
};

export default App;
