import React from "react";
import "./BookCard.css";

function BookCard({ data, books }) {
  console.log(books);
  // const classicsBooks = data[0].allBooks[0].Classics;
  // const entrepreneurshipBooks = data[0].allBooks[1].Entrepreneur;

  // console.log(classicsBooks);
  // console.log(entrepreneurshipBooks);

  return (
    <>
      <div className="book_card_container">
        {books &&
          books.map((book) => {
            return (
              <div className="book_card" key={book.id}>
                <div className="book_cover_image">
                  <img src={book.bookImage} alt="" />
                </div>
                <p>{book.bookTitle}</p>
                <p>{book.bookAuthor}</p>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default BookCard;
