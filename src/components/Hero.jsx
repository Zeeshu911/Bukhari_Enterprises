import { ChevronRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  thinTitle,
  thickTitle,
  subTitle,
  linkOneTitle,
  linkOneUrl,
  linkTwoTitle,
  linkTwoUrl,
  backgroundImage,
}) => {
  return (
    // px-32
    <section
      className={`flex flex-col justify-center px-5 h-[450px] text-white bg-cover bg-bottom md:bg-center md:px-16 md:h-[650px] lg:px-32 bg-fixed md:mt-28`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
      }}
    >
      <h1 className="text-2xl font-semibold mb-2 md:font-thin md:text-5xl">
        {thinTitle}
      </h1>
      <h1 className="text-5xl font-bold mb-5 md:text-8xl">{thickTitle}</h1>
      <p className="text-[16px] text-stone-300 mb-5 md:text-[18px]">
        {subTitle}
      </p>
      <ul className="flex items-center gap-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        {linkOneUrl && (
          <>
            <ChevronRight />
            <li>
              <Link to={linkOneUrl}>{linkOneTitle}</Link>
            </li>
          </>
        )}
        {linkTwoUrl && (
          <>
            <ChevronRight />
            <li>
              <Link to={linkTwoUrl}>{linkTwoTitle}</Link>
            </li>
          </>
        )}
      </ul>
    </section>
  );
};

export default Hero;
