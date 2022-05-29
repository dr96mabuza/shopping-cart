import React from "react";

function App(props) {
  const { inventory, handleClick } = props;

  return (
    <div className="App">
      {inventory.map((a) => {
        return (
          <div key={a.item} id="product-Container">
            <div className="product-name">{a.item}</div>
            <div className="product-price">R{a.price}</div>
            <button
              className="product-addToCartButton"
              onClick={() => {
                handleClick(a);
              }}
            >
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
