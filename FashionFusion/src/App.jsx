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

import SignUp from './pages/SignUp.jsx';
import LoginPage from './pages/LoginPage.jsx'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/logindraft' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/wardrobe' element={<Wardrobe/>}/>
      <Route path='/outfits' element={<Outfits/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

