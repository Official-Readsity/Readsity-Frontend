import React from "react";
import BooksOverviewNavBar from "../components/BooksOverviewNavBar";
import "./Books.css";

const Books = () => {
  return (
    <>
      <BooksOverviewNavBar />
      <div className="book_overview_first_container">
        <h2>LOTS OF E-BOOKS TO BE READ.</h2>
        <p>
          Welcome to our neighborly library. We have thousands of books waiting
          to be explored.
        </p>
      </div>
      <p className="book_overview_text">Overview Editor’s picks</p>
      <div className="book_browseCategories">
        <p>
          BROWSE CATEGORIES <span className="book_view-all"> ( View all )</span>
        </p>
      </div>
    </>
  );
};

export default Books;
