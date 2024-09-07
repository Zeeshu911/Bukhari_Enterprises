import React from "react";
import ship from "@/assets/ship.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <section className="bg-white py-16 px-5 md:px-16 lg:px-32 gap-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h2 className="text-4xl font-bold mb-6 text-gray-800">
              About Bukhari Enterprises
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Bukhari Enterprises is a global leader in the import and export of
              premium quality fruits and vegetables. With years of experience,
              we pride ourselves on delivering the freshest produce to markets
              around the world.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our commitment to quality and service excellence has established
              us as a trusted partner in global trade. We are dedicated to
              bridging markets and providing unparalleled access to the world’s
              best produce.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Bukhari Enterprises, we believe in building strong, lasting
              relationships with our partners and clients, ensuring satisfaction
              in every transaction.
            </p>
            <Link
              to="/contact-us"
              className="mt-6 inline-block bg-green-600 text-white py-3 px-8 rounded-full shadow hover:bg-green-700 transition duration-300"
            >
              Get in Touch
            </Link>
          </div>

          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={ship}
              alt="About Bukhari Enterprises"
              className="w-full shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
