import React from "react";
import "./styles/cartStyle.css";

function Shop(props) {
  const { cart, total, clearCart, removeItemFromCart } = props;

  return (
    <>
      <h1>Shop component</h1>
      <div id="cart">
        {cart.map((product) => {
          return (
            <div className="cart-item">
              <div className="cart-item-imageContainer">
                <img src={product.src} alt="" className="cart-item-image" />
              </div>
              <div className="cart-item-name">{product.item}</div>
              <div className="cart-item-quantity">Quantity</div>
              <div
                onClick={() => {
                  removeItemFromCart(product);
                }}
                className="cart-item-removeItem"
              >
                X
              </div>
            </div>
          );
        })}
      </div>
      <div>R{total}</div>
      <button onClick={clearCart}>Clear Cart</button>
    </>
  );
}

export default Shop;
