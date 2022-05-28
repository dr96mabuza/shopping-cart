import React from "react";

function App(props) {
  const { inventory, handleClick } = props;

  return (
    <div className="App">
      {inventory.map((a) => {
        return (
          <div
            key={a.item}
            onClick={() => {
              handleClick(a);
            }}
          >
            <div>{a.item}</div>
            <div>R{a.price}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
