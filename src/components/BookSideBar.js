import React from "react";
import "./BookSideBar.css";
import { BookSideBarData } from "../data/BookSideBarData";
import { useNavigate } from "react-router-dom";

function BookSideBar() {
  const navigate = useNavigate();
  return (
    <div className="bookSideBar">
      <ul className="bookSideBarList">
        {BookSideBarData.map((val, key) => {
          return (
            <li
              className="book_sidebar_row"
              onClick={() => navigate(val.link)}
              id={
                window.location.pathname === val.link
                  ? "BookSidebar--active"
                  : ""
              }
              key={key}
            >
              {val.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BookSideBar;
