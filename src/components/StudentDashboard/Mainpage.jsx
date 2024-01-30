import React from 'react';
import '../asserts/css/Main.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
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

