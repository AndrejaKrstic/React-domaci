import React from "react";
import SingleProduct from "./SingleProduct";

function Cart({ products }) {
  return (
    <div>
      <h3>dada</h3>
      {products.map((prod) => (
        <SingleProduct product={prod} key={prod.id} inCart={0} />
      ))}
    </div>
  );
}

export default Cart;
