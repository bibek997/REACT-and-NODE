import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import Login from './pages/Login.jsx';
import Product from './components/Product.jsx';
import Wardrobe from './components/Wardrobe.jsx';
import Outfits from './components/Outfits.jsx';
import Wishlist from './components/Wishlist.jsx'
import Profile from './components/Profile.jsx';
import LoginForm from './components/LoginForm.jsx';
import RegisterForm from './components/RegisterForm.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Homepage/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/wardrobe' element={<Wardrobe/>}/>
      <Route path='/outfits' element={<Outfits/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/register' element={<RegisterForm/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

