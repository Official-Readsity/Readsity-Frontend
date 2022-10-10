import React from "react";
import "./Books.css";
import BooksOverviewNavBar from "../components/BooksOverviewNavBar";
import { useState, useEffect } from "react";
// import BooksJsonFile from "../data/bookCard.json";
import TestData from "../data/test.json";
import BookCard from "../components/BookCard";

const Books = () => {
  // const [booksData, setBooksData] = useState(BooksJsonFile);
  const [testData, setTestData] = useState(TestData);
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    // setBooksData(BooksJsonFile);
    setTestData(TestData);
    setAllBooks(testData[0].allBooks);
  }, [testData, allBooks]);

  console.log(allBooks);

  // const classicsBooks = testData[0].allBooks[0].Classics;
  // const entrepreneurshipBooks = testData[0].allBooks[1].Entrepreneur;
  // const christainBooks = testData[0].allBooks[2].Christian;
  // const RomanceBooks = testData[0].allBooks[3].Romance;
  // const fictionBooks = testData[0].allBooks[4].Fiction;
  // const mysteryBooks = testData[0].allBooks[5].Mystery;

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

      <div>
        <BookCard books={allBooks} />
      </div>
    </>
  );
};

export default Books;
