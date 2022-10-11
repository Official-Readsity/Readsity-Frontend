import React from "react";
import "./Books.css";
import BooksOverviewNavBar from "../components/BooksOverviewNavBar";
import { useState, useEffect } from "react";
// import BooksJsonFile from "../data/bookCard.json";
import TestData from "../data/test.json";
// import BookCard from "../components/BookCard";
import BookCategoryCard from "../components/BookCategoryCard";
import BookBestSellersCard from "../components/BookBestSellersCard";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Books = () => {
  // const [booksData, setBooksData] = useState(BooksJsonFile);
  const [testData, setTestData] = useState(TestData);
  const [allBooks, setAllBooks] = useState([]);
  const [bookCategory, setBookCategory] = useState([]);
  const [bookBestSellers, setBookBestSellers] = useState([]);
  const [trendingBooks, setTrendingBooks] = useState([]);
  const [popularClassics, setPopularClassics] = useState([]);

  useEffect(() => {
    // setBooksData(BooksJsonFile);
    setTestData(TestData);
    setAllBooks(testData[0].allBooks);
    setBookCategory(testData[7].BookCategories);
    setBookBestSellers(testData[8].BestSellers);
    setTrendingBooks(testData[9].TrendingBooks);
    setPopularClassics(testData[10].PopularClassics);
  }, [testData, allBooks, trendingBooks, popularClassics]);

  // console.log(trendingBooks);

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
      <div className="book_browseCategories_container">
        <div className="book_browseCategories">
          <p className="book_overview_text">Overview Editor’s picks</p>
          <p>
            BROWSE CATEGORIES{" "}
            <span className="book_view-all"> ( View all )</span>
          </p>
          <br />
          <div className="book_browseCategories_card">
            <BookCategoryCard bookCategory={bookCategory} />
          </div>
        </div>
      </div>
      <div className="book_bestSeller_container">
        <div className="book_bestSellers">
          <p>
            BEST SELLER
            <span className="book_view-all"> ( View all )</span>
          </p>
          <div className="book_bestsellers_card">
            <BookBestSellersCard bookBestSeller={bookBestSellers} />
          </div>
        </div>
      </div>

      <div className="book_bestSeller_container">
        <div className="book_bestSellers">
          <p>
            TRENDING BOOKS
            <span className="book_view-all"> ( View all )</span>
          </p>
          <div className="book_bestsellers_card">
            <BookBestSellersCard trendingBooks={trendingBooks} />
          </div>
        </div>
      </div>

      <div className="book_bestSeller_container">
        <div className="book_bestSellers">
          <p>
            POPULAR CLASSICS
            <span className="book_view-all"> ( View all )</span>
          </p>
          <div className="book_bestsellers_card">
            <BookBestSellersCard popularClassics={popularClassics} />
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />

      {/* <div>
        <BookCard books={allBooks} />
      </div> */}
    </>
  );
};

export default Books;
