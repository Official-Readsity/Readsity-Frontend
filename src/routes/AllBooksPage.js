import React from "react";
import "./AllBooksPage.css";
import BookCategoryDisplay from "../components/BookCategoryDisplay";
import BookSideBar from "../components/BookSideBar";
import BooksInidualPageNavBar from "../components/BooksIndividualPageNavBar";

function AllBooksPage() {
  return (
    <>
      <BooksInidualPageNavBar />
      <div className="BookDisplay">
        <div className="SideBarDisplay">
          <BookSideBar />
        </div>
        <div className="Cat-Book-Display">
          <BookCategoryDisplay />
        </div>
      </div>
    </>
  );
}

export default AllBooksPage;
