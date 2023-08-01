import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Account from "./components/Account.js";
import Cart from "./components/Cart.js";
import About from "./components/About";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div>
          <main>
            <Routes>
              <Route path="/" element=<Home /> />
              <Route path="/myaccount" element=<Account /> />
              <Route path="/cart" element=<Cart /> />
              <Route path="/about" element=<About /> />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
