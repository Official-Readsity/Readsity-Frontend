import React from 'react'
import NewsletterImage from "../assets/Newsletter/asian-woman.png";

const Newsletter = () => {
    return (
      <section className="Newsletter flex p-4 pb-0 items-center justify-center ">
        <div className="Newsletter-left-section hidden md:block">
          <img src={NewsletterImage} alt="Newsletter" className="h-80" />
        </div>

        <div className="Newsletter-right-section  py-10 md:block md:w-4/6  md:pr-20 md:pb-10">
          <div>
            <h1 className="text-2xl font-bold text-dark-purple py-5 md:text-5xl">
              Subscribe to our Newsletter
            </h1>
            <p className="text-dark-purple pb-4 hidden md:block">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut felis
              malesuada ornare aenean. Ac mi facilisis pretium sed at quisque
              sed. Bibendum sem consequat consectetur id convallis posuere e
            </p>
          </div>

          <form className="newsletter-form relative  rounded-md">
            <input
              placeholder="Enter your Username"
              type="email"
              className="p-4 bg-F4EFEF w-full rounded-md outline-none"
            />
            <button className="text-white bg-dark-purple p-4 absolute top-0 right-0 bottom-0 w-1/3 rounded-md">
              Join Now
            </button>
          </form>
        </div>
      </section>
    );
}

export default Newsletter