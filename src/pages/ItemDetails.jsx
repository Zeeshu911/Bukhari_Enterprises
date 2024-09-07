import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fruits, vegetables } from "@/fruitsAndVegetables";
import { Helmet } from "react-helmet-async";
import ContactText from "@/components/ContactText";
const FruitItemDetails = () => {
  const { item } = useParams();
  const [itemDetail, setItemDetail] = useState({});
  const [linkOneTitle, setLinkOneTitle] = useState("");
  const [linkOneUrl, setLinkOneUrl] = useState("");
  const [linkTwoTitle, setLinkTwoTitle] = useState("");
  const [linkTwoUrl, setLinkTwoUrl] = useState("");

  useEffect(() => {
    if (item !== "Potatoes" && item !== "Onions") {
      console.log(`IN IF TAG ${item}`);

      const element = fruits.find((fruit) => fruit.name === item);
      setItemDetail(element);
      setLinkOneTitle("Fruits");
      setLinkOneUrl("/fruits");
      setLinkTwoTitle(item);
      setLinkTwoUrl(`/fruits/${item}`);
    } else {
      console.log(`IN ELSE TAG ${item}`);
      const element = vegetables.find((veg) => veg.name === item);
      setItemDetail(element);
      setLinkOneTitle("Vegetables");
      setLinkOneUrl("/vegetables");
      setLinkTwoTitle(item);
      setLinkTwoUrl(`/fruits/${item}`);
    }
  }, [item]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>
          {itemDetail.singleItem
            ? `${itemDetail.singleItem} Exporters in Pakistan | Bukhari Enterprises`
            : "Item Details"}
        </title>
        <meta
          name="description"
          content={
            itemDetail.smallDescription ||
            "Find out more about this fresh produce item."
          }
        />
      </Helmet>
      <Hero
        thinTitle={"Farm-Fresh"}
        thickTitle={itemDetail.name}
        subTitle={itemDetail.mainSentence}
        linkOneTitle={linkOneTitle}
        linkOneUrl={linkOneUrl}
        linkTwoTitle={itemDetail.name}
        linkTwoUrl={`/fruits/${itemDetail.name}`}
        backgroundImage={itemDetail.heroImage}
      />
      <div className="flex flex-col gap-6 px-5 md:px-16 lg:px-32 lg:flex-row lg:items-center lg:gap-5 xl:gap-8 2xl:gap-20 mb-10">
        <div className="w-full lg:w-1/2 ">
          <h3 className="text-3xl md:text-5xl my-8 font-bold">
            {itemDetail.name}
          </h3>
          <p className="text-[20px] text-stone-700 leading-relaxed mb-8">
            {itemDetail.smallDescription}
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex">
          <img src={itemDetail.imageUrl} alt="fruits" />
        </div>
      </div>
      <div className="px-5 md:px-16 lg:px-32 my-10 text-[20px] text-stone-700 leading-relaxed">
        {itemDetail.largeDescription}
      </div>
      <ContactText backgroundImage={itemDetail.heroImage} />
    </>
  );
};

export default FruitItemDetails;
