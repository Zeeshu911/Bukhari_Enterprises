import Hero from "@/components/Hero";
import React, { useEffect } from "react";
import { fruits } from "../fruitsAndVegetables";
import { Link } from "react-router-dom";
import ContactText from "@/components/ContactText";
import fruitsImage from "@/assets/fruits.jpg";
import fruitsBowl from "@/assets/fruits-bowl.jpg";
import fruitsTwo from "@/assets/fruits2.jpg";
import { Helmet } from "react-helmet-async";
const Fruits = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Helmet>
        <title>Fruits Exporters in Pakistan | Bukhari Enterprises</title>
        <meta
          name="description"
          content="From our orchards to your table, savor the juiciest and freshest fruits, handpicked with care."
        />
      </Helmet>
      <Hero
        thinTitle={"Farm-Fresh"}
        thickTitle={"Fruits"}
        subTitle={
          "From our orchards to your table, savor the juiciest and freshest fruits, handpicked with care."
        }
        linkOneTitle={"Fruits"}
        linkOneUrl={"/fruits"}
        backgroundImage={fruitsImage}
      />
      <h3 className="text-3xl px-5 md:px-16 lg:px-32 md:text-5xl mt-16 mb-8 font-bold">
        FRESH <span className="font-thin">FRUITS</span>
      </h3>
      <div className="flex flex-col gap-6  px-5 md:px-16 lg:px-32 lg:flex-row lg:items-center lg:gap-5 xl:gap-8 2xl:gap-20 mb-10">
        <p className="w-full lg:w-1/2 text-[20px] text-stone-700 leading-relaxed">
          <span className="font-bold">Bukhari Enterprises</span> is a premier
          exporter of high-quality fruits from Pakistan. We specialize in
          delivering the finest Mangoes, Grapes, Apples, Bananas, Kiwi and
          Oranges, cultivated with care and precision. With years of experience
          in the industry, we have established a strong global presence, serving
          a diverse clientele in the food sector. Bukhari Enterprises is
          committed to providing Fresh Fruits and Seasonal Fruits to markets
          around the world, ensuring that our customers receive only the best
          from our farms.
        </p>
        <img className="w-full lg:w-1/2" src={fruitsBowl} alt="fruits-bowl" />
      </div>
      <div className="flex flex-col gap-10">
        {fruits.map((element, index) => {
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
                  to={`/fruits/${element.name}`}
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
      <ContactText backgroundImage={fruitsTwo}/>

    </>
  );
};

export default Fruits;
