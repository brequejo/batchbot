import React, { useState, useEffect } from 'react';
import UserService from '@services/user/user.service';

const UserPage = ()=> {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const response = await UserService.fetchUserData();
                setUserData(response);
            } catch (err) {
                setError('Error al obtener los datos del usuario.');
            } finally {
                setLoading(false);
            }
        };

        getUserData();
    },[]);

    if (loading) {
        return <div>Cargando...</div>;
    }
    if (error) {
        return <div>{error}</div>;
    }

    return(
        <div>
            <h1>Información del usuario</h1>
            <p>Email: {userData.email}</p>
            <p>Username: {userData.username}</p>
            <img src={`../assets/${userData.profilePicture}`} alt="Profile picture" />
        </div>
    );
};

export default UserPage;