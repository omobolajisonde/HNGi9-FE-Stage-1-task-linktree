import React from "react";

import linksData from "../assets/linksdata";
import Link from "./Link";

const Links = () => {
  return (
    <ul id="links">
      {linksData.map((linkData) => (
        <Link key={linkData.id} data={linkData} />
      ))}
    </ul>
  );
};

export default Links;
