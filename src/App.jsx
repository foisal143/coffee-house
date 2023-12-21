import { useState } from 'react';

import './App.css';
import Header from './pages/sharedpage/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from './pages/sharedpage/Footer/Footer';

function App() {
  return (
    <>
      <Header></Header>
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
