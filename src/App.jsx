import React from 'react';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import './App.css';
import AssignmentToDo from './pages/AssignmentToDo.jsx';

function App() {
  return (
    
    <>
    <div className="bg-white min-h-screen">
    <AssignmentToDo/>
    </div>
    </>

  );
}
export default App;

