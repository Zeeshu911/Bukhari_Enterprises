import React from "react";
import { Link } from "react-router-dom";
import whatsappSvg from "@/assets/whatsapp.png";

const Whatsapp = () => {
  return (
    <>
      <Link
        className="fixed bottom-4 right-8 h-14 w-14"
        to={"https://wa.me/03096375479"}
        target="_blank"
      >
        <img src={whatsappSvg} alt={"Whatsapp"} />
      </Link>
    </>
  );
};

export default Whatsapp;
