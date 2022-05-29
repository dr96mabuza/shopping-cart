import React, { useState, useEffect } from "react";
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
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (item) => {
    const click = cart.some((a) => {
      return a === item;
    });

    if (click === false) {
      setCart(cart.concat(item));
    }
  };

  const calculateTotal = (array) => {
    const total = array.reduce((a, b) => {
      return a + b.price * b.num;
    }, 0);
    return total;
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (cartItem) => {
    const product = cart.some((a) => {
      return a === cartItem;
    });

    const num = cart.find();

    if (product === true) {
      cart.splice(num, 1);
    }
  };

  useEffect(() => {
    if (cart.length === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(calculateTotal(cart));
    }
  }, [cart]);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<App inventory={inventory} handleClick={handleAddToCart} />}
        />
        <Route
          path="/shop"
          element={
            <Shop cart={cart} total={totalPrice} clearCart={clearCart} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
