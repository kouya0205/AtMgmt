import './App.css';
import Clock from './compounents/clock';
// import React, { useState } from 'react';
import Home from './compounents/home';

function App() {
  return (
    <>
      <div className='text-center'>
        <div className="flex items-center justify-center text-center flex-col">
          <Clock />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
