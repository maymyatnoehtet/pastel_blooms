import React, { useState } from "react";
import FlashMessage from "./FlashMessage";

const Product = ({ product, onAddToCart }) => {
  const [showMessage, setShowMessage] = useState(false);

  const flashMessage = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 1000);
  };

  // Convert image buffer data to blob url
  const convertBufferToUrl = (imageData) => {
    const { contentType, data } = imageData;
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    const url = URL.createObjectURL(blob);
    return url;
  };

  return (
    <div className="product-card">
      {showMessage && (
        <FlashMessage
          message={`${product.name} has been added to cart.`}
          duration={1000}
        />
      )}
      <button
        className="cart-btn"
        onClick={() => {
          onAddToCart(product);
          flashMessage();
        }}
      >
        Cart
      </button>
      <img
        className="product-img"
        src={convertBufferToUrl(product.image)}
        alt={product.image.filename}
      ></img>
      <div className="product-info">
        <p className="product-name">{product.name}</p>
        <p className="product-price">${product.price}</p>
      </div>
    </div>
  );
};

export default Product;
