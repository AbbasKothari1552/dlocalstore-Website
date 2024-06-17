// src/components/PopularProducts.js
import React from 'react';
import './PopularProduct.css';

const PopularProduct = () => {
  return (
    <div className="popular-products">
      <div className="header">
        <h2>Popular Products</h2>
       
      </div>
      <div className="product-grid">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="product-item">
            <div className="product-image"></div>
            <div className="product-name">Name</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProduct;
