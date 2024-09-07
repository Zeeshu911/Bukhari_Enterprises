import React from "react";
import { Link } from "react-router-dom";
const ContactText = ({ backgroundImage }) => {
  return (
    <section
      className={`flex items-center justify-center px-5 h-[450px] relative text-white bg-cover bg-bottom md:bg-center md:px-16 mix-blend-darken lg:px-32 bg-fixed`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <div className="absolute inset-0 bg-stone-800 opacity-50"></div>
      <div className="flex items-center flex-col justify-center text-center z-10">
        <h2 className="text-3xl font-bold mb-4">Get In Touch With Us</h2>
        <p className="text-lg mb-6">
          Have any questions or inquiries? We are here to help you with all your
          needs. Reach out to us today.
        </p>
        <Link to="/contact-us">
          <button className="bg-green-600 font-semibold text-white px-6 py-2 rounded-full hover:bg-green-700 hover:text-white transition duration-300">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactText;
