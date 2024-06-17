// src/components/ProductGrid.js
import React from 'react';
import './CategoryGrid.css';
import CategoryCard from '../CategoryCard/CategoryCard';

const CategoryGrid = () => {
  return (<>
    <div className="products-grid">
      {[...Array(8)].map((_, index) => (
        <CategoryCard key={index} />
      ))}

    </div>
    <div id='moreCategory'>
    <a  href="#more-categories">More Categories &gt;</a>
    </div>
    </>
  );
};

export default CategoryGrid;
