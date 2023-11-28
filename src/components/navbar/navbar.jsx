// Navbar.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const decodedToken = token ? JSON.parse(atob(token.split('.')[1])) : null;
    const userRole = decodedToken ? decodedToken.role : null;

    const handleLogout = () => {
        // Limpiar el token al cerrar sesión
        localStorage.removeItem('token');
        // Redirigir al inicio de sesión
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand active" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">About Us</Link>
                        </li>
                        {token ? (
                            <>
                                {userRole === 'admin' && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/admin">
                                            Admin
                                        </Link>
                                    </li>
                                )}
                                {userRole === 'employee' && (
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/employee">
                                            Employee
                                        </Link>
                                    </li>
                                )}
                                <li className="nav-item">
                                    <button className="nav-link btn btn-link" onClick={handleLogout}>
                                        Logout
                                    </button>
                                </li>
                            </>
                        ) : (
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
