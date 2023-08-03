import React from "react";
import Navigation from "./Navigation";

const Header = ({ cartItems }) => {
  return (
    <header>
      <section className="header-section">
        <h1> Pastel Blooms </h1>
        <Navigation cartItems={cartItems} />
      </section>
    </header>
  );
};

export default Header;
