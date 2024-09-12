"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

import emailjs from "@emailjs/browser";

const ContactForm = (
  {
    //   name,
    //   phone,
    //   email,
    //   message,
    //   marketing,
    //   privacy,
    //   submit,
  }
) => {
  const form = useRef(null);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("Email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    setShowNotification(true);

    e.target && e.target.reset();
  };

  return (
    <div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="text-sm lg:text-base w-[80%] mx-auto bg-primaryYellow flex flex-col justify-center items-center lg:items-start lg:flex-row gap-14 py-9 mb-16"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:gap-9">
          <input
            id="user_name"
            name="user_name"
            type="text"
            required
            placeholder="imię i nazwisko"
            className="w-full rounded-full border border-black leading-8 px-4"
          ></input>

          <input
            id="user_phone"
            name="user_phone"
            type="text"
            required
            placeholder="numer telefonu"
            className="w-full rounded-full border border-black leading-8 px-4"
          ></input>

          <input
            id="user_email"
            name="user_email"
            type="email"
            required
            placeholder="adres e-mail"
            className="w-full rounded-full border border-black leading-8 px-4"
          ></input>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-9">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            placeholder="wiadomość"
            className="w-full border border-black rounded-2xl leading-8 px-4"
          ></textarea>

          <div className="flex justify-end items-center gap-6">
            <div className="flex flex-col">
              <span>
                <input
                  type="checkbox"
                  id="terms_and_conditions"
                  name="terms_and_conditions"
                  required
                  className=""
                />
                <label
                  htmlFor="terms_and_conditions"
                  className="-translate-y-2 relative ml-2"
                >
                  * Akceptuję politykę prywatności
                </label>
              </span>
              {/* <span>
                <input
                  type="checkbox"
                  id="marketingTermsCheckbox"
                  required
                  className=""
                />
                <label
                  htmlFor="marketingTermsCheckbox"
                  className="-translate-y-2 relative before:content-['*'] before:text-smartOrange before:mr-2"
                >
                  {privacy}
                </label>
              </span> */}
            </div>
            <button className="py-1 px-6 text-base border border-smartOrange rounded-full flex justify-center items-center  bg-primaryOrange hover:bg-orange-300 active:bg-smartOrange transition transition-duration-300">
              {" "}
              wyślij
            </button>
          </div>
        </div>
      </form>
      {showNotification && (
        <div className="text-primaryOrange py-2 px-4 absolute top-100 right-0 mt-2 mr-2 rounded">
          Wiadomość wysłana. Dziękujemy!
        </div>
      )}
    </div>
  );
};

export default ContactForm;
