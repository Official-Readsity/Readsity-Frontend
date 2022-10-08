import React from "react";
import BlogBodyLeft from "./BlogBodyLeft";
import BlogBodyRight from "./BlogBodyRight";
import "./BlogBody.css";

const BlogBody = () => {
  return (
    <div className="blog-body">
      <BlogBodyLeft />
      <BlogBodyRight />
    </div>
  );
};

export default BlogBody;
