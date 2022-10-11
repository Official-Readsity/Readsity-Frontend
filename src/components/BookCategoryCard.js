import React from "react";
import "./BookCategoryCard.css";

function BookCategoryCard({ bookCategory }) {
  console.log(bookCategory);
  return (
    <>
      {bookCategory.map((bookCat) => {
        return (
          <div className="bookCategory_image_text" key={bookCat.id}>
            <div className="bookCategory_image">
              <img
                src={bookCat.categoryImage}
                alt=""
                className="bookCategory_img"
              />
            </div>
            <p className="bookCategory_text">{bookCat.bookCategory}</p>
          </div>
        );
      })}
    </>
  );
}

export default BookCategoryCard;
