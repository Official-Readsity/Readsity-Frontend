import React from "react";
import rhimes from "../assets/bestsellers/rhimes.png";
import happiness from "../assets/bestsellers/happiness.png";
import mocking from "../assets/bestsellers/mocking.png";
import BestsellersCard from "./BestsellersCard";
import "./bestsellers.css";

const BestSellers = () => {
  const bestsellers = [
    {
      id: 1,
      img: rhimes,
      title: "The rhimes in me",
      author: "Gridhar",
      background: "blue",
      desc: "cardimgone",
    },
    {
      id: 2,
      img: happiness,
      title: "Make your own happiness",
      author: "Satir Noah",
      background: "yellow",
      desc: "cardimg",
    },
    {
      id: 3,
      img: mocking,
      title: "To kill a mocking bird",
      author: "Harper Lee",
      background: "blue",
      desc: "cardimg",
    },
  ];
  return (
    <section className="bestsellers">
      <h2 className="bestsellers-topic">BEST SELLERS</h2>
      <div className="card-wrapper">
        {bestsellers.map((bestseller) => (
          <BestsellersCard key={bestseller.id} bestseller={bestseller} />
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
