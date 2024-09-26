import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (a) => {
        a.preventDefault();
        const response = await fetch('http://localhost:5555/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email, password})
        });

        const data = await response.json();
    if (response.ok) {
      console.log('Login successful:', data);

      localStorage.setItem('email', email);
      localStorage.setItem('token', data.token);

      navigate('/home/');
    } else {
      console.error('Login failed:', data);
    }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <div className="mb-4">
              <label className="block text-gray-700">Email:</label>
              <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
              />
          </div>
          <div className="mb-6">
              <label className="block text-gray-700">Password:</label>
              <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded"
              />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Login
          </button>
      </form>
  </div>
  );
};

export default Login;
