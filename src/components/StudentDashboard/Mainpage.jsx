import React from 'react';
import '../asserts/css/Main.css'
import Navbar from './Navbar'
import DynamicCards from './DynamicCards';

export const Mainpage = () => { 
  return (
    <>
      <div>
        <Navbar/>
        <h3 className="fw-bolder title">Leave Manager Dashboard</h3>
        <DynamicCards/>
      </div>
    </>
  );
};

