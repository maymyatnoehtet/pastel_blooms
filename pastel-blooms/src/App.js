import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div>
        <div className="header">
          <Header />
        </div>
        <Home />
      </div>
    </Router>
  );
}

export default App;
