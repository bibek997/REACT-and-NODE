import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

