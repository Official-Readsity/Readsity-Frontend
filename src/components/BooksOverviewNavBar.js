import React from "react";
import "./BooksOverviewNavBar.css";
import ReadsityLogo from "../assets/readsitynav.png";
import CartIcon from "../assets/cart.png";
import SearchIcon from "../assets/fluent_book-search-24-filled (3).png";
import WishListIcon from "../assets/wishList1.png";

function BooksOverviewNavBar() {
  return (
    <>
      <div className="book_overview_navbar">
        <div className="book_overview_logo_search">
          <div>
            <img src={ReadsityLogo} alt="" />
          </div>
          <div>
            <form action="" className="book_search_form">
              <input
                type="text"
                id="#search"
                placeholder="Search"
                className="book_search_input"
              />
              <button className="btn-search">
                <img src={SearchIcon} alt="" />
              </button>
            </form>
          </div>
        </div>
        <div className="book_overview_wishlist_cart">
          <div>
            <img src={WishListIcon} alt="" />
          </div>
          <div>
            <img src={CartIcon} alt="" />
          </div>
        </div>
        <div className="book_create_account">
          <button className="btn_create_account">Create account</button>
          <p>Have an account? Sign in</p>
        </div>
      </div>
    </>
  );
}

export default BooksOverviewNavBar;
