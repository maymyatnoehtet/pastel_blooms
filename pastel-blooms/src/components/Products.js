// eslint-disable
import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "./Product";

const Products = () => {
  const addToCart = () => {
    console.log("Button Clicked!");
  };

  // GET all products data from backend
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const result = await axios({
        method: "GET",
        url: "http://127.0.0.1:3001/api/v1/products",
      });

      if (result.data.status === "success") {
        setProducts(result.data.data);
      }
    } catch (err) {
      console.log("Error:", err.message);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  // Convert image buffer data to blob urls and store in dictionary
  const convertBufferToUrl = (urls, productData) => {
    const { filename, contentType, data } = productData.image;
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    const url = URL.createObjectURL(blob);

    urls[filename] = url;
    return urls;
  };
  const imageUrls = products.reduce(convertBufferToUrl, {});

  return (
    <section className="products-section">
      <h1> Fresh Blooms </h1>
      <div className="products-container">
        {products.map((product) => (
          <Product>
            <button className="cart-btn" onClick={addToCart}>
              Cart
            </button>
            <img
              className="product-img"
              src={imageUrls[product.image.filename]}
              alt={product.image.filename}
            ></img>
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
            </div>
          </Product>
        ))}
      </div>
    </section>
  );
};

export default Products;
