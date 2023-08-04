import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <div className='App'>
        <div className='Main-Container'>
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
            </Routes>
          </Router>
        </div>
      </div>
    </AuthContextProvider>
  );
}

export default App;
