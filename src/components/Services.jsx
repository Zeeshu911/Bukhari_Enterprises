import React from "react";
import servicesImage from "@/assets/services.jpg";
const Services = () => {
  return (
    <>
      <section
        className="py-12 min-h-[450px] bg-gray-100 flex flex-col justify-center px-5 bg-cover bg-bottom md:bg-center md:px-16 lg:px-32 bg-fixed"
        style={{
          backgroundImage: `url(${servicesImage})`,
        }}
      >
        <div className="mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
          <p className="text-lg mb-8 text-white font-semibold">
            We specialize in the import and export of premium fruits and
            vegetables.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Import Services</h3>
              <p className="text-gray-600">
                We bring the finest produce from around the world to meet local
                demands.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Export Services</h3>
              <p className="text-gray-600">
                Delivering the freshest fruits and vegetables from our farms to
                the global market.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4">Custom Solutions</h3>
              <p className="text-gray-600">
                Tailored import and export solutions to meet your specific
                needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
