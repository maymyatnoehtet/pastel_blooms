import React from "react";
import { Link, useLocation } from "react-router-dom";
const Navigation = () => {
  const location = useLocation();
  return (
    <nav className="nav-section">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li
          className={
            location.pathname === "myaccount" ? "mx-2 navActive" : "mx-2"
          }
        >
          <Link to="/myaccount">My Account</Link>
        </li>
        <li
          className={location.pathname === "cart" ? "mx-2 navActive" : "mx-2"}
        >
          <Link to="/cart">Cart</Link>
        </li>
        <li
          className={
            location.pathname === "aboutus" ? "mx-2 navActive" : "mx-2"
          }
        >
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
