import React from 'react';
import styled, { keyframes } from "styled-components"; 
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie'; // Import js-cookie

import backgroundImage from "./image.jpg";
import GlobalStyles from "./globalStyles"; 
import Tracker from "./Tracker"; 

const Main = styled.div` 
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  height: 100vh;
  background-image: url(${backgroundImage}); 
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat;
  animation: fadeIn 1s ease-in-out; 
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`; 

// Define a keyframe animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LogoutButton = styled(Link)`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  animation: ${fadeIn} 0.5s ease-in-out;
  
  &:hover {
    background-color: darkred;
  }
`;

const HomePage = () => { 
  const handleLogout = () => {
    // Delete the user cookie
    Cookies.remove('user');
  };

  return ( 
    <Main> 
      <GlobalStyles /> 
      <Tracker /> 
      <LogoutButton to="/login" onClick={handleLogout}>LogOut</LogoutButton>
    </Main> 
  ) 
} 
  
export default HomePage;
