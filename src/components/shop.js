import React from "react";

function Shop(props) {
  const { cart } = props;

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
    </>
  );
}

export default Shop;
