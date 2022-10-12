import React from "react";
import "./BookCategoryDisplay.css";
// import { BookSideBarData } from "../data/BookSideBarData";

function BookCategoryDisplay() {
  return (
    <>
      <div className="BookCategoryDisplayNavbar">
        <p>ALL BOOKS</p>
        <ul className="BookCategoryDisplayNavbar_list">
          <li>RATING</li>
          <li>NEWEST</li>
          <li>AUTHOR</li>
          <li>TITLE</li>
        </ul>
      </div>
    </>
  );
}

export default BookCategoryDisplay;
