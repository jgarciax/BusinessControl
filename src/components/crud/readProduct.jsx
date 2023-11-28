// ReadProduct.jsx

import React, { useState, useEffect } from 'react';
import api from '../../api/api.js';
import '../../assets/styles/readProduct.css';

const ReadProduct = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/api/products/read');
            const data = response.data;
            setProducts(data);
        } catch (error) {
            console.error('Error fetching products:', error);
            setError(`Error fetching products: ${error.message}`);
        }
    };

    return (
        <div className="employee-container">
            <div className='row'>
                <div className='col product_container'>
                    {error && <p className="error-message">{error}</p>}
                    <ul>
                        <h2>Product List <small>(Activity Register)</small> </h2>
                        {products.map((product) => (
                            <li key={product.id}>
                                <div className="product-info">
                                    <div>
                                        <strong>Name:</strong> {product.name_product}
                                    </div>
                                    <div>
                                        <strong>Stock:</strong> {product.stack}
                                    </div>
                                    <div>
                                        <strong>Category:</strong> {product.category}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>
                <div className='col'>
                    {error && <p className="error-message activity-container">{error}</p>}
                    <ul>
                        <h2>Activity List <small>(Activity history)</small> </h2>
                        {products.map((product) => (
                            <li key={product.id}>
                                <div className="activity-info">
                                    <div>
                                        <strong>ID:</strong> {product.id}
                                    </div>
                                    <div>
                                        <strong>Created At:</strong> {product.created_at}
                                    </div>
                                    <div>
                                        <strong>Updated At:</strong> {product.updated_at}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>



        </div>

    );
};

export default ReadProduct;
