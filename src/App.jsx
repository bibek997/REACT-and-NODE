import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage.jsx';
import AssignmentToDo from './pages/AssignmentToDo.jsx';
import LifeCycle from './pages/LifeCycle.jsx';
import Timer from './components/Timer.jsx';
import FunctionalProps from './components/FunctionalProps.jsx';
import ComA from './components/ComA.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/todoassignment' element={<AssignmentToDo />} />
          <Route path='/lifecycle' element={<LifeCycle />} />
          <Route path='/timer' element={<Timer />} />
          <Route path='/functionalprops' element={<FunctionalProps />} />
          <Route path='/coma' element={<ComA/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
