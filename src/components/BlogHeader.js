import React from "react";
import "./BlogHeader.css";
import ellipse from "../assets/blogs/ellipse.png";

const BlogHeader = () => {
  return (
    <div className="blog-header">
      <div className="bg-image">
        <div className="overlay"></div>
      </div>
      <div className="header-content">
        <h2>Connecting readers to authors: Readsity's mission</h2>
        <h3>A startup's mission to see African readers and writers win</h3>
        <div className="prof">
          <img src={ellipse} alt="" />
          <h5>Tobi S.</h5>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
