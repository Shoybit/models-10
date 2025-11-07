import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MinLayout = () => {
  return (
    <div className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow"> 
        <Outlet></Outlet>
      </main>
      <Footer /> 
    </div>
  );
};

export default MinLayout;