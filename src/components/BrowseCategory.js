import React from "react";
import georgeOrwell from "../assets/bestsellers/george-orwell.png";
import country from "../assets/bestsellers/country.png";
import simplicity from "../assets/bestsellers/simplicity.png";
import "./browsecategory.css";

const BrowseCategory = () => {
  return (
    <section className="browsecategory">
      <div className="browsecategory-wrapper">
        <div className="explore">
          <h2>Explore and read thousand of books online</h2>
          <button>Browse our Categories</button>
        </div>
        <div className="pictures">
          <img className="country-img" src={country} alt="" />
          <img className="george-img" src={georgeOrwell} alt="" />
          <img className="simplicity-img" src={simplicity} alt="" />
        </div>
      </div>
    </section>
  );
};

export default BrowseCategory;
