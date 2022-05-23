import React from "react";
import { Link } from "react-router-dom";

import "./styles/navStyle.css";

function Nav() {
  return (
    <nav>
      <Link to={"/"}>
        <div>home</div>
      </Link>
      <ul>
        <Link to={"/shop"}>
          <li>cart</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
