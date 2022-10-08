import React from "react";
import "./OurServices.css";
import vec1 from "../assets/services/vec1.svg";
import vec2 from "../assets/services/vec2.svg";
import vec3 from "../assets/services/vec3.svg";
import service1 from "../assets/services/service1.svg";
import service2 from "../assets/services/service2.svg";
import service3 from "../assets/services/service3.svg";

const OurServices = () => {
  const summaryIcons = [
    {
      id: 1,
      img: vec1,
      text: "Buying & Selling eBooks",
    },
    {
      id: 2,
      img: vec2,
      text: "Price Guarantee For Authors",
    },
    {
      id: 3,
      img: vec3,
      text: "Direct-To-Consumer-Sales",
    },
  ];

  const servicesContent = [
    {
      id: 1,
      icon: vec1,
      title: "Buying & Selling eBooks",
      paragraph:
        "Publish your books at Readsity to get it to the eyes of book lovers and be purchased. Buy books from your favourite authors here.",
      img: service2,
      classname: "content-flex",
    },
    {
      id: 2,
      icon: vec2,
      title: "Price Guarantee For Authors",
      paragraph:
        "Authors get guaranteed prices, that do not exceed prices charged by them for their books. As we ensure to keep you profitable.",
      img: service3,
      classname: "content-flex reverse",
    },
    {
      id: 3,
      icon: vec3,
      title: "Direct-To-Consumer Sales",
      paragraph:
        "Customers are buying directly from authors. Thereby, having control over pricing andcosts. They also get to send feedbacks or reactions to authors which the authors get instantly.",
      img: service1,
      classname: "content-flex",
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-summary">
        {summaryIcons.map((sumIcon) => {
          return (
            <div key={sumIcon.id} className={"sumIconCard"}>
              <img src={sumIcon.img} alt="something" />
              <h6>{sumIcon.text}</h6>
            </div>
          );
        })}
      </div>
      <div className="service-content">
        {servicesContent.map((content) => {
          return (
            <div className={content.classname} key={content.id}>
              <div className="left-side">
                <img src={content.icon} alt="" />
                <h2>{content.title}</h2>
                <p>{content.paragraph}</p>
              </div>
              <img src={content.img} alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
