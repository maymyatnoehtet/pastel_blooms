import React from "react";

const Product = ({ product, onAddToCart }) => {
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
      <button className="cart-btn" onClick={() => onAddToCart(product)}>
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
