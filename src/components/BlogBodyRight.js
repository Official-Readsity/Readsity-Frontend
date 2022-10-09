import React from "react";
import Rectangle4 from "../assets/blogs/Rectangle4.png";

const BlogBodyRight = () => {
  return (
    <div className="blog-body-right">
      <div className="blog-image">
        <img src={Rectangle4} alt="" />
        <h6>Sheyi owolabi on unsplash</h6>
      </div>
      <h5>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros nunc amet
        aliquam amet. Senectus leo justo est sed.
      </h5>
      <div className="paragraph1">
        <h4>Introduction</h4>
        <p>
          It is often said that the best way to hide a thing from a black man is
          to hide it in a book. At Readsity we're turning such notions on its
          head. With our elite team, we work round the clock to ensure that
          books are made available and authors profit from thier work. <br />
          <br /> There are several problems African writers and creatives face.
          One of which is piracy. Readsity solves this problem through
          direct-to-customer sales where we act as a meeting point making it
          easier for authors and writers to first find each other.
          <br />
          <br /> Now African writers can make thier money without having to deal
          with the usual bottleneck of a traditional publishing company and
          readers can easily purchase books from thier favorite authors.
          <br />
          <br /> And if you're a first time author, even better! Just bring your
          talents, we'll provide the audience.
          <br />
          <br /> Another thing that stands us out is our price gurantee. Authors
          keep 80% of thier earnings! That's higer than traditional publishing
          firms. And it's guranteed! Not subject to the whims of a bureaucracy.
          As you sell, you earn!
          <br />
          <br /> And we'reweb based making it super easy for any author from
          anywhere in Africa to connect with us.
          <br />
          <br /> Do you have anymore questions? A lot of them are answered on
          this blog, but in the event that you still have questions after
          reading we have an amazing customer care team on hand to answer all
          your questions and guide you.
          <br />
          <br />
          In furtherance of our mission we just raised $1 million dollars in
          seed funding from Tiger partners and we'll be expanding physically
          across Africa soon and we'll connect Africaan writers to readers first
          across the continent, then the world.
        </p>
      </div>
    </div>
  );
};

export default BlogBodyRight;
