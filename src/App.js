import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Components/SignupPage';
import LoginPage from './Components/LoginPage';
import HomePage from './Components/HomePage';
import ProtectedRoute from './Components/ProtectedRoute';
import NotFound from './Components/NotFound';

const App = () => (
  <BrowserRouter>
      
      <Routes>
      <Route exact path='/' Component={Signup}/>
      <Route exact path='/login' Component={LoginPage}/>
      <Route exact path="/home" Component={HomePage} />
      <Route Component={NotFound} />
      </Routes> 
       
  </BrowserRouter>     
)


export default App;
