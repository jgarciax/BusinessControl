import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../assets/styles/login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                // Guarda el token en localStorage
                localStorage.setItem('token', data.token);
                // Redirige al Home en caso de éxito
                navigate('/');
            } else {
                // Maneja la respuesta fallida
                setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
            }
        } catch (error) {
            console.error('Error al procesar la solicitud:', error);
            setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <form>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="button" onClick={handleLogin}>
                    Iniciar Sesión
                </button>

                <Link to="/" className='back'>
                    <a> Go back</a>
                </Link>
                <hr />

                {error && <p className="error-message">{error}</p>}
            </form>
        </div>
    );
};

export default Login;
