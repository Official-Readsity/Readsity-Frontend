import React from "react";
import instagram from "../assets/footer/instagram.svg";
import twitter from "../assets/footer/twitter.svg";
import facebook from "../assets/footer/facebook.svg";
import appstore from "../assets/footer/appstore.svg";
import googleplay from "../assets/footer/googleplay.svg";
import "./Footer.css";

const Footer = () => {
  const legalLinks = [
    {
      id: 1,
      title: "Terms",
      href: "#",
    },
    {
      id: 2,
      title: "Privacy",
      href: "#",
    },
    {
      id: 3,
      title: "Copyright",
      href: "#",
    },
    {
      id: 4,
      title: "Privacy",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      title: "Instagram",
      icon: instagram,
      href: "#",
    },
    {
      id: 2,
      title: "Twitter",
      icon: twitter,
      href: "#",
    },
    {
      id: 3,
      title: "Facebook",
      icon: facebook,
      href: "#",
    },
  ];

  const aboutLinks = [
    {
      id: 1,
      title: "About Readsity",
      href: "#",
    },
    {
      id: 2,
      title: "Our blog",
      href: "#",
    },
    {
      id: 3,
      title: "Invite Friends",
      href: "#",
    },
  ];

  const contactUsLinks = [
    {
      id: 1,
      title: "info@Readsity.com",
      href: "#",
    },
    {
      id: 2,
      title: "Help Center",
      href: "#",
    },
    {
      id: 3,
      title: "Support Community",
      href: "#",
    },
  ];

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="col-1">
          <h3>Get our apps free</h3>
          <img src={appstore} alt={"appstore"} />
          <img src={googleplay} alt={"googleplay"} />
        </div>
        <div className="footer-menus">
          <div className="col-2">
            <h2>Legal</h2>
            <ul>
              {legalLinks.map(({ id, title, href }) => (
                <li key={id}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-3">
            <h2>Social</h2>
            <ul>
              {socialLinks.map(({ id, title, icon, href }) => (
                <li key={id}>
                  <img src={icon} alt={"social icon"} />
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-4">
            <h2>About</h2>
            <ul>
              {aboutLinks.map(({ id, title, href }) => (
                <li key={id}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-5">
            <h2>Contact us</h2>
            <ul>
              {contactUsLinks.map(({ id, title, href }) => (
                <li key={id}>
                  <a href={href}>{title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
