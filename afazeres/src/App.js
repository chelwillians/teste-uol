import React from 'react';

import Header from './Components/Header';
import Main from './pages/Main/';

import './global.css'; 

export default function App(){
  return (
    <div className="App">
      <Header /> 
      <Main />
    </div>
  );
};
