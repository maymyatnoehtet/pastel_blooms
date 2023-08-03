import React from "react";
import { Link } from "react-router-dom";
const Navigation = ({ cartItems }) => {
  // Calculate total quantity
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="nav-section">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li className="cart-qty">{totalQty}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
