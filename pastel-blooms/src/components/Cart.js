import React from "react";

const Cart = ({ cartItems }) => {
  // Convert image buffer data to blob url
  const convertBufferToUrl = (imageData) => {
    const { contentType, data } = imageData;
    const uint8Array = new Uint8Array(data.data);
    const blob = new Blob([uint8Array], { type: contentType });
    const url = URL.createObjectURL(blob);
    return url;
  };

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="cart-section">
      <div className="cart-items-container">
        <div className="cart-headings">
          <p></p>
          <p>PRODUCT</p>
          <p>PRICE</p>
          <p>QTY</p>
          <p>TOTAL</p>
        </div>
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-img-wrapper">
              <img
                className="cart-item-img"
                src={convertBufferToUrl(item.image)}
                alt={item.image.filename}
              ></img>
            </div>
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>{item.quantity}</p>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="cart-total">
          <p>Total:</p>
          <p>${total}</p>
        </div>
        <div className="form-wrapper">
          <p>
            Please enter your email to checkout. Invoice will be emailed to you
            shortly.
          </p>
          <form>
            <input type="text" placeholder="Your email"></input>
            <input type="submit" value="Checkout"></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Cart;
