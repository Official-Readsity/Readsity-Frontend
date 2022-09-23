import React from "react";
import thinking from "../assets/bestsellers/thinking.png";
import innovation from "../assets/bestsellers/innovation.png";
import resistance from "../assets/bestsellers/resistance.png";
import BestsellersCard from "./BestsellersCard";
import "./bestsellers.css";

const BestSellers = () => {
  const bestsellers = [
    {
      id: 1,
      img: thinking,
      title: "Thinking,Fast and Slow",
      author: "Daniel Kahnwman",
    },
    {
      id: 2,
      img: innovation,
      title: "How Innovation Works",
      author: "Matt Ridley",
    },
    {
      id: 3,
      img: resistance,
      title: "Beautiful Resistance",
      author: "Jon Tyson",
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
