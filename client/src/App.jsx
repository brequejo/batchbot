import { Route, Routes } from 'react-router-dom';
import Login from '@pages/login/login.jsx';
import Home from '@pages/home/home.jsx';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default App;
