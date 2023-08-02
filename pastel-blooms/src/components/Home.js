import React from "react";
import Landing from "./Landing";
import Products from "./Products";

const Home = ({ products, onAddToCart }) => {
  return (
    <section className="main">
      <Landing />
      <Products products={products} onAddToCart={onAddToCart} />
    </section>
  );
};

export default Home;
