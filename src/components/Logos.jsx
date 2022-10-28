import React from "react";
import slack from "../assets/slack.png";
import github from "../assets/github.png";

const Logos = () => {
  return (
    <div className="logos">
      <img src={slack} alt="slack" />
      <img src={github} alt="github" />
    </div>
  );
};

export default Logos;
