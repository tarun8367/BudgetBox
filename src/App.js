import React from 'react';

import './App.css';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <div className="App">
     {/* <Home></Home> */}
     {/* <LoginPage/> */}
     <SignupPage />
    </div>
  );
}

export default App;
