import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <section className="header-section">
        <h1 className="header-name"> Pastel Blooms </h1>
        <Navigation />
      </section>
    </header>
  );
};

export default Header;
