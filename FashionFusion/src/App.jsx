import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Product from './pages/Product.jsx';
import Wardrobe from './pages/Wardrobe.jsx';
import Outfits from './pages/Outfits.jsx';
import Wishlist from './pages/Wishlist.jsx'
import Profile from './pages/Profile.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx'
import SignUp from './pages/SignUp.jsx';
import LoginPage from './pages/LoginPage.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/wardrobe' element={<Wardrobe/>}/>
      <Route path='/outfits' element={<Outfits/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/loginfrom' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/' element={<LoginPage/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

