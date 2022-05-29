import React from "react";

function Shop(props) {
  const { cart, total, clearCart } = props;

  return (
    <>
      <h1>Shop component</h1>
      <div>
        {cart.map((a) => {
          return (
            <div>
              {a.item} {a.price}
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
