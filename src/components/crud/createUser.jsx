// CreateUser.jsx

import React, { useState } from 'react';
import api from '../../api/api.js';
import '../../assets/styles/createUser.css';

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'employee',
  });

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Limpiar mensaje al cambiar el contenido del campo
    setMessage('');
  };

  const validateFields = () => {
    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setMessage('No se pueden dejar campos vacíos. Por favor, completa todos los campos.');
      return false;
    }

    return true;
  };

  const handleCreateUser = async () => {
    if (!validateFields()) {
      return;
    }

    try {
      const response = await api.post('/api/users/create', formData);
      console.log('User created successfully:', response.data);
      setMessage('Usuario creado con éxito');
    } catch (error) {
      console.error('Error creating user:', error.message);
      if (error.response) {
        if (error.response.status === 409) {
          setMessage('Correo electrónico ya existente. Por favor, elige otro.');
        } else {
          setMessage('Error creando usuario. Por favor, inténtalo de nuevo.');
        }
      } else {
        setMessage('Error creando usuario. Por favor, inténtalo de nuevo.');
      }
    }
  };

  return (
    <div className="createUser__container">
      <h2>Create User</h2>
      <form>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <label>Role:</label>
        <select
          name="role"
          value={formData.role}
          onChange={handleInputChange}
        >
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <button type="button" onClick={handleCreateUser}>
          Create User
        </button>

        {message && <p className={message.includes('Error') ? "error-message" : "success-message"}>{message}</p>}
      </form>
    </div>
  );
};

export default CreateUser;
