import Hero from "@/components/Hero";
import React, { useEffect } from "react";
import { vegetables } from "../fruitsAndVegetables";
import { Link } from "react-router-dom";
import ContactText from "@/components/ContactText";
import vegetablesImage from "@/assets/vegetables.jpg";
import vegetablesTwo from "@/assets/vegetables2.jpg";
import { Helmet } from "react-helmet-async";

const Vegetables = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Fresh Vegetables Exporters in Pakistan | Bukhari Enterprises</title>
        <meta name="description" content="Explore our fresh and high-quality vegetables including potatoes and onions, sourced from the best farms around the world." />
        <link rel="canonical" href="https://bukhari-enterprises.vercel.app/vegetables" />
      </Helmet>

      <Hero
        thinTitle={"Farm-Fresh"}
        thickTitle={"Vegetables"}
        subTitle={
          "Cultivated with dedication, our vegetables bring the garden’s goodness to your kitchen."
        }
        linkOneTitle={"Vegetables"}
        linkOneUrl={"/vegetables"}
        backgroundImage={vegetablesImage}
      />
      <h3 className="text-3xl px-5 md:px-16 lg:px-32 md:text-5xl mt-16 mb-8 font-bold">
        FRESH <span className="font-thin">VEGETABLES</span>
      </h3>
      <div className="flex flex-col gap-6  px-5 md:px-16 lg:px-32 lg:flex-row lg:items-center lg:gap-5 xl:gap-8 2xl:gap-20 mb-10">
        <p className="w-full lg:w-1/2 text-[20px] text-stone-700 leading-relaxed">
          <span className="font-bold">Bukhari Enterprises</span> is a premier
          exporter and importer of high-quality vegetables all aroung the world
          including Pakistan, Iran, Turkey and Europe. We specialize in
          delivering the finest Potatoes and Onions, cultivated with care and
          precision. With years of experience in the industry, we have
          established a strong global presence, serving a diverse clientele in
          the food sector. Bukhari Enterprises is committed to providing Fresh
          Vegetables and Seasonal Vegetables to markets around the world,
          ensuring that our customers receive only the best from our farms.
        </p>
        <img className="w-full lg:w-1/2" src={vegetablesTwo} alt="fruits" />
      </div>
      <div className="flex flex-col gap-10">
        {vegetables.map((element, index) => {
          return (
            <div
              className={`flex flex-col gap-6 px-5 md:px-16 lg:px-32 lg:items-center lg:gap-5 xl:gap-8 2xl:gap-20 mb-10 ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
              key={element.id}
            >
              <div className="w-full lg:w-1/2 ">
                <h3 className="text-3xl md:text-5xl font-bold mb-8">
                  {element.name}
                </h3>
                <p className="text-[20px] text-stone-700 leading-relaxed mb-8">
                  {element.smallDescription}
                </p>
                <Link
                  to={`/vegetables/${element.name}`}
                  className="border-[1px] rounded-3xl border-green-500 px-9 py-3 transition-all duration-300 hover:bg-green-500 hover:text-white font-semibold"
                >
                  Read More
                </Link>
              </div>
              <div className="w-full lg:w-1/2 flex">
                <img src={element.imageUrl} alt="fruits" />
              </div>
            </div>
          );
        })}
      </div>
      <ContactText backgroundImage={vegetablesTwo} />
    </>
  );
};

export default Vegetables;
