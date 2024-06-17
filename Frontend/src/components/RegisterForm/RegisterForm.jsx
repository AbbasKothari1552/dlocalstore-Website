// src/components/RegisterForm.js
import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import './RegisterForm.css';

const RegisterForm = ({ isOpen, onClose }) => {
  const [isOTPVisible, setOTPVisible] = useState(false);

  const [firstName , setfirstName] = useState('');
  const [lastName , setlastName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

 const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match");
      return;
    }
    setPasswordError('');
    setOTPVisible(true);
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {!isOTPVisible ? (
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <label>First Name</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            required
          />
           <label>Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label>Re-enter Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {passwordError && <p className="error">{passwordError}</p>}
          <button type="submit">Register</button>
          <button type="button" className="google-signin">Sign in with Google</button>
        </form>
      ) : (
        <div>
          <label>Enter OTP</label>
          <input type="text" required />
          <button type="button" onClick={onClose}>Confirm OTP</button>
        </div>
      )}
    </Modal>
  );
};
export default RegisterForm;
