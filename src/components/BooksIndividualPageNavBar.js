import React from "react";
import "./BooksIndividualPageNavBar.css";
import ReadsityLogo from "../assets/readsitynav.png";
import SearchIcon from "../assets/fluent_book-search-24-filled (4).png";

function BooksIndividualPageNavBar() {
  return (
    <>
      <div className="book_individualpage_navbar">
        <div className="book_individualpage_logo_search">
          <div>
            <img src={ReadsityLogo} alt="" />
          </div>
        </div>
        <div className="book_individual_page_navlist">
          <ul>
            <li>HOME</li>
            <li>BOOKS</li>
            <li>BROWSE</li>
            <li>COMMUNITY</li>
          </ul>
        </div>
        <div className="book_individualpage_search_container">
          <div>
            <form action="" className="book_individualpage_search_form">
              <input
                type="text"
                id="#search"
                placeholder="Search"
                className="book_individualpage_search_input"
              />
              <button className="btn-individualpage_search">
                <img src={SearchIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default BooksIndividualPageNavBar;
