"use client";

import React from "react";
import { useState } from "react";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    console.log("email submitted");
  };

  return (
    <div class="w-full md:max-w-screen-md flex flex-col justify-center items-center">
      <heading class="flex justify-start w-full">
        <h1 className="page_heading_mobile">Contact</h1>
      </heading>
      <form onSubmit={handleSubmit} className="flex flex-col w-full">
        <label className="contact_form_label">
          Name <span className="required_label"> (required)</span>
        </label>
        <div className="flex flex-col md:flex-row">
          <div className="name_box flex flex-col w-full">
            <label htmlFor="firstName" className="name_label">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name="firstName"
              className="contact_form_input md:mr-2"
            />
          </div>
          <div className="name_box flex flex-col w-full">
            <label htmlFor="lastName" className="name_label">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
              className="contact_form_input"
            />
          </div>
        </div>

        <label htmlFor="email" className="contact_form_label">
          E-mail<span className="required_label"> (required)</span>
        </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className="contact_form_input"
        />

        <label htmlFor="subject" className="contact_form_label">
          Subject
          <span className="required_label"> (required)</span>
        </label>
        <input
          type="text"
          name="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className="contact_form_input"
        />

        <label htmlFor="message" className="contact_form_label">
          Message
          <span className="required_label"> (required)</span>
        </label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className="contact_form_input"
          rows="6"
        ></textarea>

        <div className="w-full">
          <button
            type="submit"
            className="bg-neutral-800 text-white text-sm px-10 py-2 tracking-[1px] my-5"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
