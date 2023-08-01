import React from "react";
import Product from "./Product";

const Products = () => {
  const addToCart = () => {
    console.log("Button Clicked!");
  };
  const productList = [];

  for (let i = 0; i < 6; i++) {
    productList.push(
      <Product>
        <button className="cart-btn" onClick={addToCart}>
          Cart
        </button>
        <img
          className="product-img"
          src="https://images.pexels.com/photos/931147/pexels-photo-931147.jpeg"
          alt="Flowers"
        ></img>
        <div className="product-info">
          <p className="product-name">Divine Wishes</p>
          <p className="product-price">$75</p>
        </div>
      </Product>
    );
  }

  return (
    <section className="products-section">
      <h1> Fresh Blooms </h1>
      <div className="products-container">{productList}</div>
    </section>
  );
};
export default Products;
