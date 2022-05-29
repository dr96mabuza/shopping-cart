import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/shop";
import Nav from "./components/nav";

import meat from "./components/images/usman-yousaf-eOktYr3tAMo-unsplash.jpg";
import macaroni from "./components/images/bozhin-karaivanov-m5Ft3bsalhQ-unsplash.jpg";
import sugar from "./components/images/mathilde-langevin-ymEgsqhdOXw-unsplash.jpg";
import spaghetti from "./components/images/markus-winkler-6MgAG3O7XQc-unsplash.jpg";
import rice from "./components/images/jocelyn-morales-FXdpfV9TBRs-unsplash.jpg";

const initialValues = [
  { item: "rice", src: rice, price: 20, quantity: 1 },
  { item: "spaghetti", src: spaghetti, price: 19, quantity: 1 },
  { item: "sugar", src: sugar, price: 23, quantity: 1 },
  { item: "macaroni", src: macaroni, price: 15, quantity: 1 },
  { item: "meat", src: meat, price: 30, quantity: 1 },
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
      return a + b.price * b.quantity;
    }, 0);
    return total;
  };

  const incrementQuantity = (item) => {
    const incrementedArray = cart.map((a) => {
      if (item === a) {
        a.quantity += 1;
        return a;
      } else if (item !== a) {
        return a;
      }
    });
    setCart(incrementedArray);
  };

  const decrementQuantity = (item) => {
    const decrementedArray = cart.map((a) => {
      if (a.quantity === 1 && item === a) {
        return a;
      } else if (item === a && a.quantity > 1) {
        a.quantity -= 1;
        return a;
      } else if (item !== a) {
        return a;
      }
    });
    setCart(decrementedArray);
  };

  const clearCart = () => {
    setCart([]);
  };

  const removeItemFromCart = (cartItem) => {
    const product = cart.some((a) => {
      return a === cartItem;
    });

    if (product === true) {
      const newCart = cart.filter((item) => {
        return item !== cartItem;
      });

      setCart(newCart);
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
            <Shop
              cart={cart}
              total={totalPrice}
              clearCart={clearCart}
              removeItemFromCart={removeItemFromCart}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
