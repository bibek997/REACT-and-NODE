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
      
    </Routes>
    </BrowserRouter>
  );
}

export default App;

