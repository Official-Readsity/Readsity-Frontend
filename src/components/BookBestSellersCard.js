import React from "react";
import "./BookBestSellersCard.css";

function BookBestSellersCard({ bookBestSeller }) {
  console.log(bookBestSeller);
  return (
    <>
      {bookBestSeller &&
        bookBestSeller.map((book) => {
          return (
            <div key={book.id}>
              <div className="book_bestseller_card">
                <div className="book_bestseller_image">
                  <img src={book.bookImage} alt="" />
                </div>
                <p>{book.bookTitle}</p>
                <p>{book.bookAuthor}</p>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default BookBestSellersCard;