import React, { useState } from 'react';
import Cookies from 'js-cookie';
import './index.css';


function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  
    // Set expiration time (in days)
    const expirationDays = 7; // Example: 7 days
  
    // Calculate expiration time in milliseconds
    const expirationTime = new Date();
    expirationTime.setTime(expirationTime.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
  
    // Create a cookie upon sign-up with expiration
    Cookies.set('user', { name, email }, { expires: expirationTime });
  
    // Log the created cookie
    console.log("Created cookie:", Cookies.get('user'));
  
    // Redirect to home page after signup
    // You can replace "/home" with the actual path to your home page
    window.location.href = "/home";
  };
  

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit" className="button">Sign Up</button>
      </form>
      <div className='logincontainer'>
        <p>Already have an account? <a href="/login">Log in</a></p>
      </div>
    </div>
  );
}

export default Signup;
