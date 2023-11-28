// Admin.jsx

import React from 'react';
import Navbar from '../navbar/navbar';
import ReadUser from '../crud/readUser';
import CreateUser from '../crud/createUser';
import '../../assets/styles/admin.css'; 
import ReadProduct from '../crud/readProduct';

const Admin = () => {
    return (
        <>
            <div className='admin__container'>
                <div className='create__container'>
                    <CreateUser />
                </div>
                <div className='read__container'>
                    <ReadUser />
                </div>
                <ReadProduct/>
            </div>
        </>
    );
};

export default Admin;
