import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
      <div>
      <h1>Welcome to Route </h1>
    <nav>
        <Link to="/" >Home</Link>
        <Link to="/products" >Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
    </nav>
    </div>
  );
};

export default Header;
