// src/components/LoginForm.js
import React from 'react';
import Modal from '../Modal/Modal';
import './LoginForm.css';

const LoginForm = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <h2>Login</h2>
        <label>Email</label>
        <input type="email" placeholder="Email" required />
        <label>Password</label>
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
        <button type="button" className="google-signin">Sign in with Google</button>
      </form>
    </Modal>
  );
};

export default LoginForm;
