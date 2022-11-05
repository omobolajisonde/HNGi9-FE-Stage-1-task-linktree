import React from "react";

const Form = () => {
  return (
    <form className="cform">
      <div className="cform__name">
        <div className="cform__group">
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="firstName"
            id="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div className="cform__group">
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="lastName"
            id="last_name"
            placeholder="Enter your last name"
          />
        </div>
      </div>
      <div className="cform__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@email.com"
        />
      </div>
      <div className="cform__group">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply you as possible..."
        ></textarea>
      </div>
      <div className="cform__agreement">
        <input type="checkbox" name="agreement" id="agree" />
        <label htmlFor="agree">
          You agree to providing your data to Omobolaji Sonde who may contact
          you.
        </label>
      </div>
      <div className="cform__cta">
        <button type="submit" id="btn__submit">
          Send message
        </button>
      </div>
    </form>
  );
};

export default Form;
