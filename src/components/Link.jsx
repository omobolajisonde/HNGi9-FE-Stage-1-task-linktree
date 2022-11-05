import React from "react";

const Link = ({ data: linkData }) => {
  return (
    <li key={linkData.id}>
      <a
        id={linkData.id}
        href={linkData.link}
        target={linkData.blank ? "_blank" : undefined}
        rel="noreferrer"
        title={linkData.title}
      >
        {linkData.text}
      </a>
    </li>
  );
};

export default Link;
