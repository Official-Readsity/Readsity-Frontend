import React from "react";
import Rectangle5 from "../assets/blogs/Rectangle5.svg";
import Rectangle6 from "../assets/blogs/Rectangle6.svg";
import Rectangle7 from "../assets/blogs/Rectangle7.svg";
import "./BlogFooter.css";

const BlogFooter = () => {
  const blogPosts = [
    {
      id: 1,
      img: Rectangle5,
      title: "Interview with Chinua Achebe ",
      text: "Our blog writer sits down with the late author to find out how life is on the otherside.",
    },
    {
      id: 2,
      img: Rectangle6,
      title: "Time to publish your manuscript? We've got you!",
      text: "Find out how Readsity makes it easier for writers to publish their work.",
    },
    {
      id: 1,
      img: Rectangle7,
      title: "Review Time!!!",
      text: "Read this review of the hottest boo",
    },
  ];

  return (
    <div className="blog-footer">
      <div className="blog-footer-title">
        <h3>More Articles</h3>
        <button>View all posts</button>
      </div>
      <h5>Check out our other articles</h5>
      <div className="posts">
        {blogPosts.map((post) => {
          return (
            <div className="blog-post-card" key={post.id}>
              <img src={post.img} alt="" />
              <h2>{post.title}</h2>
              <p>{post.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogFooter;
