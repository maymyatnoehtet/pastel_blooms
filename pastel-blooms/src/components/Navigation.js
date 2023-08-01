import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className="nav-section">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/myaccount">My Account</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
