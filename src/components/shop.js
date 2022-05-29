import React from "react";
import "./styles/cartStyle.css";

function Shop(props) {
  const {
    cart,
    total,
    clearCart,
    removeItemFromCart,
    incrementQuantity,
    decrementQuantity,
  } = props;

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
              <div className="cart-item-quantity">
                <div className="add-quantity-text">Add quantity</div>
                <button
                  className="increment-Quantity"
                  onClick={() => {
                    incrementQuantity(product);
                  }}
                >
                  +
                </button>
                <div className="add-quantity-value">{product.quantity}</div>
                <button
                  className="decrement-Quantity"
                  onClick={() => {
                    decrementQuantity(product);
                  }}
                >
                  -
                </button>
              </div>
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
