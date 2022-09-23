import React from 'react'
import NewsletterImage from "../assets/Newsletter/asian-woman.png";

const Newsletter = () => {
    return (
      <section className="Newsletter flex p-4 pb-0 items-center justify-center ">
        <div className="Newsletter-left-section">
          <img src={NewsletterImage} alt="Newsletter" className="h-80" />
        </div>

        <div className="Newsletter-right-section pr-20 pb-10  w-4/6">
          <h1 className="text-5xl font-bold text-dark-purple">
            Subscribe to our Newsletter
          </h1>
          <p className="text-dark-purple pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis
            malesuada ornare aenean. Ac mi facilisis pretium sed at quisque sed.
            Bibendum sem consequat consectetur id convallis posuere e
          </p>
          <form className="newsletter-form relative  rounded-md">
            <input
              placeholder="Enter your Username"
              type="email"
              className="p-4 bg-F4EFEF w-full rounded-md outline-none"
            ></input>
            <button className="text-white bg-dark-purple p-4 absolute top-0 right-0 bottom-0 w-1/3 rounded-md">
              Join Now
            </button>
            {/* bg-dark-purple text-white p-4 rounded-md */}
          </form>
        </div>
      </section>
    );
}

export default Newsletter