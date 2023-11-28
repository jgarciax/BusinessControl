import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/readUser.css';
import api from '../../api/api.js';
import { AiOutlineReload } from 'react-icons/ai';

const ReadUser = () => {
    const [employees, setEmployees] = useState([]);
    const [admins, setAdmins] = useState([]);
    const token = localStorage.getItem('token')?.trim();

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/api/users/read');
            const data = response.data;

            // Filtrar empleados y administradores
            const employeesList = data.filter((user) => user.role === 'employee');
            const adminsList = data.filter((user) => user.role === 'admin');

            setEmployees(employeesList);
            setAdmins(adminsList);
        } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error.message);
        }
    };

    const handleDeleteUser = async (userId) => {
        if (window.confirm('Are you sure you want to delete this user?')) {
            try {
                await api.delete(`/api/users/delete/${userId}`);
                console.log('User deleted successfully');
                fetchUsers(); // Actualizar la lista después de eliminar un usuario
            } catch (error) {
                console.error('Error deleting user:', error.message);
            }
        }
    };

    const handleRefresh = () => {
        fetchUsers(); // Recargar la lista de usuarios al hacer clic en el botón de refresco
    };

    return (
        <div className="readUser__container">
            <div className="header">
                <h2>User List</h2>
                <a onClick={handleRefresh}>
                    Refresh <AiOutlineReload />
                </a>
            </div>

            <div className="user-list">
                <div className="employee-list">
                    <h3>Employees</h3>
                    <ul className='border'>
                        {employees.map((user) => (
                            <li key={user.id}>
                                <div className="user-info">
                                    <strong>Name:</strong> {user.name}
                                    <hr />
                                    <strong>Email:</strong> {user.email}
                                    <hr />

                                    <strong>Role:</strong> {user.role}
                                    <hr />

                                    <strong>Status:</strong> {user.status}
                                    <hr />

                                    <strong>Created At:</strong> {user.created_at}
                                    <hr />

                                    <strong>Updated At:</strong> {user.updated_at}
                                </div>
                                <div className="buttons_container">
                                    <Link to={`/edit-user/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button className="delete" onClick={() => handleDeleteUser(user.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="admin-list">
                    <h3>Administrators</h3>
                    <ul className='border'>
                        {admins.map((user) => (
                            <li key={user.id}>
                                <div className="user-info">
                                    <strong>Name:</strong> {user.name}
                                    <hr />

                                    <strong>Email:</strong> {user.email}
                                    <hr />

                                    <strong>Role:</strong> {user.role}
                                    <hr />

                                    <strong>Status:</strong> {user.status}
                                    <hr />

                                    <strong>Created At:</strong> {user.created_at}
                                    <hr />

                                    <strong>Updated At:</strong> {user.updated_at}
                                </div>
                                <div className="buttons_container">
                                    <Link to={`/edit-user/${user.id}`}>
                                        <button>Edit</button>
                                    </Link>
                                    <button className="delete" onClick={() => handleDeleteUser(user.id)}>
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ReadUser;
