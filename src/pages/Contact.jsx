import React from "react";

import "../sass/contact.scss";
import { Footer, Form } from "../components";

const Contact = () => {
  return (
    <>
      <section className="contact">
        <h2 className="contact__heading">Contact Me</h2>
        <h6 className="contact__heading--sub">
          Hi there, contact me to ask me about anything you have in mind.
        </h6>
        <Form />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
