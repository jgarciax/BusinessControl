// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/pages/home';
import Login from './components/pages/login';
import NotFound from './components/pages/notFound';
import Admin from './components/views/admin';
import Employee from './components/views/employee';
import EditUser from './components/crud/editUser';
import Navbar from './components/navbar/navbar';
import { AuthProvider } from './auth/authContext';

const App = () => {
    return (
        <Router>
            <AuthProvider> 
                <Navbar />
                <Routes>
                    <Route path="/edit-user/:id" element={<EditUser />} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/employee" element={<Employee />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;

