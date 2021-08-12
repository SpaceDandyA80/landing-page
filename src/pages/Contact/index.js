import React from "react";
import "./style.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xoqykdwr");
  if (state.succeeded) {
    <div className="contact">
      <img
        height="100"
        width="100"
        src="https://i.imgur.com/6Nn4ucD.gif"
        alt="menacing japanese character"
      />
      <p>Oh Ho! you have sumbitted information </p>;
    </div>;
  }
  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          required
        />

        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <textarea
          id="message"
          name="message"
          placeholder="Enter a message"
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Send email and message
        </button>
      </form>
    </div>
  );
}

export default Contact;
