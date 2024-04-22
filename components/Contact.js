"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
// import nodemailer from "nodemailer";

const initValues = { name: "", email: "", subject: "", message: "" };
const touchedInit = {
  name: false,
  email: false,
  subject: false,
  message: false,
};

function Contact() {
  const [values, setValues] = useState(initValues);
  const [touched, setTouched] = useState(touchedInit);
  const [isLoading, setLoading] = useState(false);

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setValues((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));

  const onSubmit = async () => {};
  // const onSubmit = async () => {
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: process.env.EMAIL,
  //       pass: process.env.PASS,
  //     },
  //   });

  //   const mailOptions = {
  //     from: process.env.EMAIL,
  //     to: process.env.EMAIL,
  //     subject: 'Test Email',
  //     text: 'This is a test email sent using Nodemailer.',
  //     html: '<p>This is a test email sent using <b>Nodemailer</b>.</p>',
  //   };

  //   transporter.sendMail(mailOptions, (error, info) => {
  //     if (error) {
  //       console.error('Error occurred while sending email:', error);
  //     } else {
  //       console.log('Email sent:', info.response);
  //     }
  //   });

  //   // setLoading(true)
  //   // try {
  //   //   await sendContactForm(values);
  //   //   setTouched(touchedInit);
  //   //   setValues(initState);
  //   //   toast.success("Email Sent");
  //   // } catch (error) {
  //   //   setLoading(false);
  //   //   toast.error("Some error occured");
  //   // }
  // };
  return (
    <div
      id="contact"
      className="mx-auto py-20 max-w-screen-lx md:grid md:grid-cols-2 md:gap-16"
    >
      <div className="my-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d847618.9437944116!2d77.58356171824018!3d17.966233766764997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bce0a03f17ff82b%3A0x9d02e89b98deb496!2sIIIT-H%20%7C%20The%20International%20Institute%20of%20Information%20Technology%20-%20Hyderabad!5e0!3m2!1sen!2sin!4v1701178540581!5m2!1sen!2sin"
          className="w-full aspect-square border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-8 text-4xl tracking-tight font-semibold t text-gray-900">
            Contact Us
          </h2>
          <form action="" className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your name
              </label>
              <input
                type="name"
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={onBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={onBlur}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={onBlur}
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                name="message"
                value={values.message}
                onChange={handleChange}
                onBlur={onBlur}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              // isLoading={isLoading}
              disabled={
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
              }
              onClick={onSubmit}
              className={`${
                !values.name ||
                !values.email ||
                !values.subject ||
                !values.message
                  ? "bg-blue-300"
                  : "bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
              } py-4 px-5 text-sm font-medium text-center text-white rounded-lg sm:w-fit`}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
