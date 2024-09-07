import React from "react";
import potatoes from "@/assets/potatoes.jpg";
import mangoes from "@/assets/mangoes.jpg";
import onions from "@/assets/onions.jpg";
import { Link } from "react-router-dom";

const Featured = () => {
  return (
    <>
      <section className="py-12 bg-white">
        <div className="mx-auto px-5 text-center">
          <h2 className="text-4xl font-bold mb-6">Featured Products</h2>
          <p className="text-lg mb-8">
            Explore our top products, carefully selected for their quality and
            freshness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
            <Link
              to={"/vegetables/Onions"}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <img
                src={onions}
                alt="Onions"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Onions</h3>
              <p className="text-gray-600">
                Enjoy the crisp and robust flavor of our freshly harvested
                onions.
              </p>
            </Link>
            <Link
              to={"/fruits/Mangoes"}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <img
                src={mangoes}
                alt="Mangoes"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Mangoes</h3>
              <p className="text-gray-600">
                Experience the rich, juicy taste of our sun-ripened mangoes.
              </p>
            </Link>

            <Link
              to={"/vegetables/Potatoes"}
              className="bg-gray-100 p-6 rounded-lg shadow-md"
            >
              <img
                src={potatoes}
                alt="Potatoes"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Potatoes</h3>
              <p className="text-gray-600">
                Savor the rich, earthy flavor of our handpicked potatoes.
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
