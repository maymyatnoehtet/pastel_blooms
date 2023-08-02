import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Home from "./components/Home";
import Header from "./components/Header";
import Cart from "./components/Cart.js";
import About from "./components/About";

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      setCartItems((prevCartItems) =>
        prevCartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { ...product, quantity: 1 },
      ]);
    }

    console.log(product.name, " has been added to cart");
  };

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

  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div>
          <main>
            <Routes>
              <Route
                path="/"
                element=<Home products={products} onAddToCart={addToCart} />
              />
              <Route path="/cart" element=<Cart cartItems={cartItems} /> />
              <Route path="/about" element=<About /> />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
