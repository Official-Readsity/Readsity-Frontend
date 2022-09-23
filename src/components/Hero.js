import React from "react";
import "./Hero.css";
import PurpleButton from "../assets/PurpleButton";
import heroFirstImg from "../assets/images/HeroImages/HeroFirstImg.png";

const Hero = (props) => {
  return (
    <>
      <div className="hero_container">
        <div>
          <div className="hero_paragraph">
            <p className="hero_largetext">
              Books are no more threatened by the kindle than stairs by
              elevators
            </p>
            <p className="hero_smalltext">
              Are you a book lover? looking for a platform to explore your
              imaginations? Then, Readsity is here for you. it provides all
              Book- related your needs.
            </p>
            <PurpleButton />
          </div>
          <div className="hero_images">
            <img src={heroFirstImg} alt="heroImage" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
