// HomePage.jsx

import React from 'react';
import breadImage from '../../assets/images/pan.png';
import baguette from '../../assets/images/baguette.png';
import pastel from '../../assets/images/pastel.png';
import rosquilla from '../../assets/images/dulce.png';
import "../../assets/styles/home.css"

const HomePage = () => {
    return (
        <div>
            <div className="home__container container mt-5">
                <div className="row align-items-center title-container">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h1 className="display-4">Welcome to <br /> "El Delicioso" <br />Bakery</h1>
                            <hr className="my-4" />
                            <p className="lead">Discover the pleasure of fresh and delicious breads, baked with passion every day.</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <img src={breadImage} alt="Pan fresco" className="img-fluid rounded my-3" />
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="card">
                            <img src={pastel} className="card-img-top" alt="Pastel" />
                            <div className="card-body">
                                <h5 className="card-title">Delicious Cakes</h5>
                                <p className="card-text">Our cakes are made with the finest ingredients and baked to perfection.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={baguette} className="card-img-top" alt="Producto" />
                            <div className="card-body">
                                <h5 className="card-title">Artisan Breads</h5>
                                <p className="card-text">Explore a variety of artisan breads, each crafted with care and expertise.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img src={rosquilla} className="card-img-top" alt="Producto" />
                            <div className="card-body">
                                <h5 className="card-title">Sweet Treats</h5>
                                <p className="card-text">Indulge in our sweet treats, from cookies to pastries, for a delightful experience.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-5">
                    <h2 className='text-center'>Testimonials</h2>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"Amazing bread! The freshness and taste are unparalleled. I'm a loyal customer!"</p>
                                <p className="card-text"><strong>- Happy Customer</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text">"Amazing bread! The freshness and taste are unparalleled. I'm a loyal customer!"</p>
                                <p className="card-text"><strong>- Happy Customer</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
