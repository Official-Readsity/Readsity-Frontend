import React from "react";
import "./BookCategoryCard.css";

function BookCategoryCard({ bookCategory }) {
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
            <div className="bookCategory_text">
              <p>{bookCat.bookCategory}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default BookCategoryCard;
