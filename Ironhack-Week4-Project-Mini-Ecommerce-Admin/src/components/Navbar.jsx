import React from 'react';
import logo from '../assets/E-commerce_store_logo_for_admins.png';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="E-commerce Store Logo" className="logo" />
      <span>Placeholder Current Choice</span>
    </nav>
  );
};

export default Navbar;
