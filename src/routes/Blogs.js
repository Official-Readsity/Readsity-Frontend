import React from "react";
import BlogBody from "../components/BlogBody";
import BlogFooter from "../components/BlogFooter";
import BlogHeader from "../components/BlogHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogHeader />
      <BlogBody />
      <BlogFooter />
      <Footer />
    </div>
  );
};

export default Blogs;
