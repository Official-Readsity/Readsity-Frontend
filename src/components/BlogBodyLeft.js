import React from "react";
import Vector6 from "../assets/blogs/Vector6.svg";
import Vector7 from "../assets/blogs/Vector7.svg";
import Vector8 from "../assets/blogs/Vector8.svg";
import Vector9 from "../assets/blogs/Vector9.svg";

const BlogBodyLeft = () => {
  return (
    <div className="blog-body-left">
      <div className="text">
        <p>Introduction</p>
        <p>Humble Beginings</p>
        <p>Story behind the mission</p>
        <p>The Plan</p>
        <p>In 10 years</p>
      </div>
      <div className="blog-socials">
        <img src={Vector6} alt="" />
        <img src={Vector7} alt="" />
        <img src={Vector8} alt="" />
        <img src={Vector9} alt="" />
      </div>
    </div>
  );
};

export default BlogBodyLeft;
