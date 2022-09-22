import React from "react";
import "./bestsellers.css";

const BestsellersCard = ({ bestseller }) => {
  console.log(bestseller);
  return (
    <div className="card">
      <img src={bestseller.img} alt="" />
      <div>
        <h2 className="card-title">{bestseller.title}</h2>
        <p className="card-author">{bestseller.author}</p>
      </div>
    </div>
  );
};

export default BestsellersCard;
