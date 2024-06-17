// src/components/ContactForm.js
import React from 'react';
import './ContactForm.css';

const ContactForm = () => {
  return (
    <div className="contact-form">
      <h2>Any Queries?</h2>
      <form>
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <label>Name</label>
        <input type="text" placeholder="Name" />
        <label>Name</label>
        <textarea placeholder="Name"></textarea>
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
};

export default ContactForm;
