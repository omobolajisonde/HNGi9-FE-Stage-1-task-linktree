import React from "react";
import zi from "../assets/zurintenship.png";
import i4g from "../assets/I4G.png";

const Footer = () => {
  return (
    <footer>
      <img src={zi} alt="zuri internship logo" />
      <p className="footer_notes">HNG Internship 9 Frontend Task</p>
      <img src={i4g} alt="I4G logo" />
    </footer>
  );
};

export default Footer;
