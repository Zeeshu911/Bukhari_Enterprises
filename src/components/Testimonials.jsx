import React from "react";

const Testimonials = () => {
  return (
    <>
      <section className="py-12 min-h-[450px] flex items-center bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
          <p className="text-lg mb-8">
            We pride ourselves on client satisfaction. Here's what some of them
            have to say.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "The quality of their mangoes is unmatched. Fresh, juicy, and
                delicious!"
              </p>
              <h3 className="text-xl font-semibold">- John Doe</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "Their export service is top-notch. Always on time with the best
                produce."
              </p>
              <h3 className="text-xl font-semibold">- Jane Smith</h3>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic mb-4">
                "I am impressed with their commitment to quality and customer
                service."
              </p>
              <h3 className="text-xl font-semibold">- Sarah Lee</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
