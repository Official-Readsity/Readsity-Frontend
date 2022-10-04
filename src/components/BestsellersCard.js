import React from "react";
import "./bestsellers.css";

const BestsellersCard = ({ bestseller }) => {
  console.log(bestseller);
  return (
    <div className="card">
      <div className={`${bestseller.background}`}>
        <img className={`${bestseller.desc}`} src={bestseller.img} alt="" />
      </div>
      <div className="card-content">
        <h2 className="card-title">{bestseller.title}</h2>
        <p className="card-author">{bestseller.author}</p>
        <button className="card-btn">Buy Book</button>
      </div>
    </div>
  );
};

export default BestsellersCard;
