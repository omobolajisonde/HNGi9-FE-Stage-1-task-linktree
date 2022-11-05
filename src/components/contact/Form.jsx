import React, { useState } from "react";

const Form = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    agreement: false,
  };
  const [formData, setFormData] = useState(initialState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  console.log(formData);
  const submitHandler = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    const formData = new FormData(e.target);
    const submittedState = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
      agreement: formData.get("agreement"),
    };
    setFormData(submittedState);
  };

  return (
    <form className="cform" onSubmit={submitHandler}>
      <div className="cform__name">
        <div
          className={
            isSubmitted && !formData.firstName
              ? "cform__group cform__group--error"
              : "cform__group"
          }
        >
          <label htmlFor="first_name">First name</label>
          <input
            type="text"
            name="firstName"
            id="first_name"
            placeholder="Enter your first name"
          />
          {isSubmitted && !formData.firstName && (
            <span>This field is required!</span>
          )}
        </div>
        <div
          className={
            isSubmitted && !formData.lastName
              ? "cform__group cform__group--error"
              : "cform__group"
          }
        >
          <label htmlFor="last_name">Last name</label>
          <input
            type="text"
            name="lastName"
            id="last_name"
            placeholder="Enter your last name"
          />
          {isSubmitted && !formData.lastName && (
            <span>This field is required!</span>
          )}
        </div>
      </div>
      <div
        className={
          isSubmitted && !formData.email
            ? "cform__group cform__group--error"
            : "cform__group"
        }
      >
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="yourname@email.com"
        />
        {isSubmitted && !formData.email && <span>Invalid email address!</span>}
      </div>
      <div
        className={
          isSubmitted && !formData.message
            ? "cform__group cform__group--error"
            : "cform__group"
        }
      >
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply you as possible..."
        ></textarea>
        {isSubmitted && !formData.message && (
          <span>This field is required!</span>
        )}
      </div>
      <div
        className={
          isSubmitted && !formData.agreement
            ? "cform__agreement cform__agreement--error"
            : "cform__agreement"
        }
      >
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
