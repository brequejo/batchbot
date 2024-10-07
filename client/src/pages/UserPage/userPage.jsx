import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '@services/user/user.service';

const UserPage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await UserService.fetchUserData();
        setUserData(response);
      } catch (err) {
        setError('Error al obtener los datos del usuario.', err);
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-stone-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Información del usuario
        </h1>
        <p className="mb-4 text-gray-700">Email: {userData.email}</p>
        <p className="mb-4 text-gray-700">Username: {userData.username}</p>
        <img
          src={`../assets/${userData.profilePicture}`}
          alt="Profile picture"
          className="block mx-auto my-6 rounded"
        />
        <Link
          to="/my-recipes"
          className="text-xl font-semibold text-orange-500 hover:text-orange-600">
          Mis recetas
        </Link>
      </div>
    </div>
  );
};

export default UserPage;
