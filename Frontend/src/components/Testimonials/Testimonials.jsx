// src/components/Testimonials.js
import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="testimonial-item"></div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
