import React from 'react';
import logo from '../assets/E-commerce_store_logo_for_admins.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="E-commerce Store Logo" className="logo" />
      <Link to="/">
        <span>E-Commerce Webshop Admin MVP React App</span>
      </Link>
    </nav>
  );
};

export default Navbar;
