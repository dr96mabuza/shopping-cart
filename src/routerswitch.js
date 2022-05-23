import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import Shop from "./components/shop";
import Nav from "./components/nav";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
