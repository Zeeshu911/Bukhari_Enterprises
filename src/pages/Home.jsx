import React, { useEffect } from "react";
import homeImage from "@/assets/home.jpg";
import About from "@/components/About";
import ContactText from "@/components/ContactText";
import home2 from "@/assets/home2.jpg";
import Services from "@/components/Services";
import Featured from "@/components/Featured";
import Testimonials from "@/components/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>Fruits & Vegetables Exporters in Pakistan | Bukhari Enterprises</title>
        <meta
          name="description"
          content="Delivering quality products worldwide with reliability, precision, and trust."
        />
        <link rel="canonical" href="https://bukhari-enterprises.vercel.app/" />
      </Helmet>
      <section
        className={`relative flex flex-col justify-center  md:mt-28 px-5 h-[450px] text-white bg-cover bg-bottom md:bg-center md:px-16 md:h-[650px] lg:px-32 bg-fixed`}
        style={{
          backgroundImage: `url(${homeImage})`,
        }}
      >
        <div className="absolute inset-0 bg-[#000000a3] opacity-50"></div>

        <h1 className="text-2xl font-semibold mb-2 md:font-thin md:text-5xl z-10">
          GLOBAL TRADE SPECIALISTS
        </h1>
        <h1 className="text-5xl font-bold mb-5 md:text-8xl z-10">
          BUKHARI ENTERPRISES
        </h1>
        <p className="text-[18px] text-white mb-5 md:text-[18px] z-10">
          Delivering quality products worldwide with reliability, precision, and
          trust.
        </p>
      </section>
      <About />
      <Services />
      <Featured />
      <Testimonials />
      <ContactText backgroundImage={home2} />
    </>
  );
};

export default Home;
