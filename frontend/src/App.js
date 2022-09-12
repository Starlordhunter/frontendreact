import React, { useState } from 'react';
import './App.css';
import Login from './components/login';
import Students from './components/students';
import Teachers from './components/teachers';

function App() {

  const [token, setToken] = useState('');

  const userLogin = (tok) => {
    // console.log(tok);
    setToken(tok);
    
  }

  return (
    <div className='App'>
      <Login userLogin={userLogin}/>
      <Teachers token={token}/>
      <Students token={token}/>
    </div>
  );
}

export default App;
