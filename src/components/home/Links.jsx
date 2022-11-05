import React from "react";
import { Link } from "react-router-dom";

import linksData from "../../assets/linksdata";
import LinkTag from "./Link";

const Links = () => {
  return (
    <ul id="links">
      {linksData.map((linkData) => (
        <LinkTag key={linkData.id} data={linkData} />
      ))}
      <li>
        <Link id="contact" to="/contact">
          Contact Me
        </Link>
      </li>
    </ul>
  );
};

export default Links;
