import React from 'react'
import NewsletterImage from "../assets/Newsletter/asian-woman.png";

const Newsletter = () => {
    return (
      <section className="Newsletter flex p-4 pb-0 items-center">
        <div className="Newsletter-left-section">
          <img src={NewsletterImage} alt="Newsletter" />
        </div>

        <div className="Newsletter-right-section px-20 pb-10 ">
          <h1 className="text-6xl font-bold text-dark-purple">
            Subscribe to our Newsletter
          </h1>
          <p className="text-dark-purple">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis
            malesuada ornare aenean. Ac mi facilisis pretium sed at quisque sed.
            Bibendum sem consequat consectetur id convallis posuere e
          </p>
          <input
            placeholder="Enter your Username"
            type="email"
            className="bg-F4EFEF p-4 rounded-md"
          ></input>
          <button className="bg-dark-purple text-white p-4 rounded-md">
            Join Now
          </button>
        </div>
      </section>
    );
}

export default Newsletter