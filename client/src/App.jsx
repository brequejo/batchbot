import { Route, Routes } from 'react-router-dom';
import Login from '@pages/login/login.jsx';
import Home from '@pages/home/home.jsx';
import UserPage from '@pages/UserPage/userPage.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/users/:userId" element={<UserPage />} />
    </Routes>
  );
};

export default App;
