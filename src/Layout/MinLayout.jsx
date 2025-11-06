import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const MinLayout = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* ✅ পুরো layout নেবে */}
      <Navbar />
      <main className="flex-grow"> {/* ✅ এই অংশ auto height নেবে */}
        <Outlet />
      </main>
      <Footer /> {/* ✅ সবসময় নিচে থাকবে */}
    </div>
  );
};

export default MinLayout;