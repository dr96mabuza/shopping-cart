import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/shop";
import Nav from "./components/nav";

const initialValues = [
  { item: "rice", image: "", price: 20, num: 6 },
  { item: "spaghetti", image: "", price: 19, num: 12 },
  { item: "suger", image: "", price: 23, num: 8 },
  { item: "pasta", image: "", price: 15, num: 3 },
  { item: "meat", image: "", price: 30, num: 7 },
];

const RouteSwitch = () => {
  const [inventory] = useState(initialValues);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart(cart.concat(item));
  };
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<App inventory={inventory} handleClick={handleClick} />}
        />
        <Route path="/shop" element={<Shop cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
