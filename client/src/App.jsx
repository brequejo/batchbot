import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './login.jsx';
import Home from './home.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App