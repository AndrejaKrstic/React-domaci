import React from "react";
import SingleProduct from "./SingleProduct";

function Shop({ products, onAdd }) {
  return (
    <div className="all-products">
      {products.map((prod) => (
        <SingleProduct product={prod} key={prod.id} onAdd={onAdd} inCart={1} />
      ))}
    </div>
  );
}

export default Shop;
