import React from "react";
import { Link } from "react-router-dom";

function MenuBar({ cartNum, isHome }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img-nike">
        <img
          src="https://www.freeiconspng.com/uploads/red-nike-logos-brands-logotypes-png-24.png"
          className={isHome === 1 ? "img-nike" : "img-nike-else"}
        />
      </Link>
      {isHome === 1 ? <br /> : <></>}

      <Link to="/" className="txt-nike">
        Nike
      </Link>
      <div className="menu-bar-items-div">
        <Link to="/shop" className="menu-bar-items">
          Shop
        </Link>
        {isHome === 1 ? <br /> : <></>}
        <Link to="/contact" className="menu-bar-items">
          Contact
        </Link>
      </div>
    </div>
  );
}

export default MenuBar;
