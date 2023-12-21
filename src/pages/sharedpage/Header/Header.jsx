import React from 'react';
import logo from '../../../assets/logo.png';
const Header = () => {
  return (
    <header className="h-20 bg-amber-950 flex items-center justify-center">
      <div className="flex items-center gap-2">
        <img className="w-16 h-16" src={logo} alt="" />
        <h4 className="text-white text-3xl">Espresso Emporium</h4>
      </div>
    </header>
  );
};

export default Header;
