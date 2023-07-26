import React from "react";
import Header from "./Header";

const Landing = () => {
  return (
    <section className="landing-section">
      <Header />
      <div className="landing-img-container">
        <div className="overlay">
          <div className="welcome-txt">
            <p>Welcome to our Pastel Blooms Boutique! 🌸</p>
            <p>
              Discover enchanting flowers that bring calm and joy. 💐 Happy
              shopping!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
