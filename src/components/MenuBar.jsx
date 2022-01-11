import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function MenuBar({ cartNum, isHome, isShop }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img-nike">
        <img
          src="https://www.freeiconspng.com/uploads/red-nike-logos-brands-logotypes-png-24.png"
          className={isHome === 1 ? "img-nike" : "img-nike-else"}
        />
      </Link>
      {isHome === 1 ? <br /> : <></>}

      <Link to="/" className={isHome === 1 ? "txt-nike" : "txt-nike-else"}>
        Nike
      </Link>
      <div
        className={
          isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
        <Link
          to="/shop"
          className="menu-bar-items"
          style={isShop === 1 ? { color: "red" } : { color: "white" }}
        >
          Shop
        </Link>
      </div>
      {isShop === 1 ? (
        <Link to="/cart" className="cart-items">
          <BsCartFill className="icon-cart" />
          <p className="cart-num">{cartNum}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MenuBar;
