// EditUser.jsx

import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import api from '../../api/api.js';
import '../../assets/styles/editUser.css';


const EditUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'employee', // Valor predeterminado, puedes cambiar según tus necesidades
        status: 'active', // Valor predeterminado, puedes cambiar según tus necesidades
        // ... agrega otros campos según tus necesidades
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get(`/api/users/${id}`);
                const userData = response.data;
                setUser(userData);
                setFormData({
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                    role: userData.role,
                    status: userData.status,
                    // ... actualiza otros campos según tus necesidades
                });
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };

        fetchUser();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleEditUser = async () => {
        try {
            await api.put(`/api/users/update/${id}`, formData);
            setMessage('User updated successfully');
            // Puedes redirigir o hacer otras acciones después de actualizar el usuario
        } catch (error) {
            console.error('Error updating user:', error.message);
            // Puedes manejar errores específicos aquí según tus necesidades
        }
    };

    return (
        <div className='editUser__container'>
            <h2>Edit User: {user.username}</h2>
            {message && <p>{message}</p>}
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    //value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label>Role:</label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                >
                    <option value="employee">Employee</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
            <div>
                <label>Status:</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                >
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
            </div>
            <button type="button" onClick={handleEditUser}>
                Save Changes
            </button>
            <Link to="/admin">
                <button> Go back </button>
            </Link>

        </div>
    );
};

export default EditUser;
