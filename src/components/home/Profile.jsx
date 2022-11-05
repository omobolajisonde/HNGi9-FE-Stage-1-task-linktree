import React, { useState } from "react";
import { RiShareForwardLine } from "react-icons/ri";

import pic from "../../assets/pic.jpg";

const Profile = () => {
  const [showSlack] = useState(false);
  return (
    <header>
      <span className="share">
        <RiShareForwardLine className="share__icon" />
      </span>
      <img src={pic} alt="profile img" id="profile__img" />
      <p id="twitter">@iamsonde</p>
      {showSlack && <p id="slack">jhay.js</p>}
    </header>
  );
};

export default Profile;
