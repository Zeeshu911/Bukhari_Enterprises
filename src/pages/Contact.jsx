import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";
import contactImage from "@/assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Initialize EmailJS
  emailjs.init("YcOimjllS64zn4ghK"); // Replace with your actual public key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_np5pdsx", // Replace with your EmailJS service ID
        "template_ii97kza", // Replace with your EmailJS template ID
        formData,
        "YcOimjllS64zn4ghK" // Replace with your public key
      )
      .then((response) => {
        setSuccessMessage(
          "Thank you! Your message has been sent successfully."
        );
        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send message. Error: ", err);
        setIsSubmitting(false);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Contact Us - Bukhari Enterprises Importers And Exporters</title>
        <meta
          name="description"
          content="Get in touch with us for inquiries, partnerships, or any questions you have."
        />
        <link
          rel="canonical"
          href="https://bukhari-enterprises.vercel.app/contact-us"
        />
      </Helmet>
      <Hero
        thickTitle={"Get in Touch"}
        thinTitle={"We're Here"}
        subTitle={
          "Reach out for inquiries, partnerships, or any questions you have."
        }
        linkOneTitle={"Contact"}
        linkOneUrl={"/contact-us"}
        backgroundImage={contactImage}
      />
      <section className="py-12 px-5 md:px-16 lg:px-32">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Contact Us</h2>
          <p className="text-center text-lg mb-8">
            We’d love to hear from you. Please fill out the form below to get in
            touch.
          </p>
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md"
          >
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-gray-700 font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {successMessage && (
              <p className="text-green-600 font-semibold text-center mt-4">
                {successMessage}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
