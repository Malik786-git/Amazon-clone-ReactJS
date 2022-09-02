import React from "react";

const Card = ({ title, img }) => {
  return (
    <>
      <div className="card my-3 mx-1">
        <h5 className="card-title fw-bold ps-3 py-2">{title}</h5>
        <figure className="text-center card-figure">
          <img src={img} className="card-img-top" alt="product" />
        </figure>
        <div className="card-body">
          <a className="card-text">Shop now</a>
        </div>
      </div>
    </>
  );
};

export default Card;
