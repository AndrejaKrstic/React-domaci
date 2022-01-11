import React from "react";
import { BsPlusLg, BsDashLg } from "react-icons/bs";

function SingleProduct({ product, onAdd, inCart }) {
  return (
    <div className={inCart === 1 ? "card" : "card-cart"} style={{ margin: 15 }}>
      <img src={product.url} alt="image" className="img-sneakers" />
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <p className="card-text">{product.description}</p>
        <p className="card-price">{product.price}</p>
      </div>
      {inCart === 1 ? (
        <>
          <button
            className="btn"
            onClick={() => onAdd(product.title, product.id)}
          >
            <BsPlusLg />
          </button>
          <button className="btn">
            <BsDashLg />
          </button>
        </>
      ) : (
        <h3>Amount: {product.amount}</h3>
      )}
    </div>
  );
}

export default SingleProduct;
