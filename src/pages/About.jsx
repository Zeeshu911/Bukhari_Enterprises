import Hero from "@/components/Hero";
import React, { useEffect } from "react";
import MiniAbout from "@/components/About";
import ContactText from "@/components/ContactText";
import aboutImage from "@/assets/about.jpg";
import { Helmet } from "react-helmet-async";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>About Us - Bukhari Enterprises</title>
        <meta
          name="description"
          content="Learn more about Bukhari Enterprises and our global mission to provide the freshest produce worldwide."
        />
      </Helmet>
      <Hero
        linkOneTitle={"About"}
        linkOneUrl={"/about-us"}
        backgroundImage={aboutImage}
        thickTitle={"Our Mission"}
        thinTitle={"Global Reach"}
        subTitle={
          "Dedicated to providing the freshest produce across the world."
        }
      />
      <MiniAbout />
      <ContactText backgroundImage={aboutImage} />
    </>
  );
};

export default About;
