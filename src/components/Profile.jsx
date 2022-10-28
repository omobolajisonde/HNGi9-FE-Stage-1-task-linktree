import React, { useState } from "react";
import pic from "../assets/pic.JPG";

const Profile = () => {
  const [showSlack] = useState(false);
  return (
    <header>
      <img src={pic} alt="profile img" id="profile__img" />
      <p id="twitter">iamsonde</p>
      {showSlack && <p id="slack">jhay.js</p>}
    </header>
  );
};

export default Profile;
