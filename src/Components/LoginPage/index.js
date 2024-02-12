import React, { useState } from 'react';
import './index.css';
import Cookies from 'js-cookie'; 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    console.log("Email:", email);
    console.log("Password:", password);

   
    const userCookie = Cookies.get('user');
    if (!userCookie) {
      setError('Please sign up first');
      return;
    }

   
    window.location.href = "/home";
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
        
        <button type="submit" className='button'>Login</button>
        
      </form>
      <div className="signup-link">
        <p>Don't have an account? <a href="/">Sign Up</a></p>
      </div>
    </div>
  );
}

export default LoginPage;
