import React, { useContext } from 'react';
import ReadProduct from '../crud/readProduct';
import { useAuth } from '../../auth/authContext.jsx';
import { Link } from 'react-router-dom';

const Employee = () => {
  const { user } = useAuth();

  // Verifica si el usuario está autenticado antes de acceder a su 'id'
  const userId = user ? user.id : null;

  return (
    <div className='employee_container'>

      <div className='products'>
        <ReadProduct />
      </div>
    </div>
  );
};

export default Employee;
