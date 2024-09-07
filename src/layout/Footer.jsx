import React from "react";
import { Link } from "react-router-dom";
import facebook from "@/assets/facebook.png";
import instagram from "@/assets/insta.png";
import shop from "@/assets/shop.png";
import phone from "@/assets/phone.png";
import email from "@/assets/email.png";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer
        className={`flex flex-col gap-7 px-5 md:px-16 lg:px-32 lg:flex-row pt-8`}
      >
        <div className="flex-1 flex flex-col gap-3">
          <img src={logo} alt="logo" className="w-36 h-36 2xl:w-52 2xl:h-52" />
          <p className="text-[18px] text-stone-800">
            Bukhari Enterprises specializes in the import and export of
            premium-quality fruits and vegetables, delivering the freshest
            produce worldwide.
          </p>
          <ul className="flex items-center ">
            <Link
              to={
                "https://www.facebook.com/profile.php?id=61564066060543&mibextid=ZbWKwL"
              }
              target="_blank"
              className="border-2 border-black rounded-full p-2 transition-all duration-300 scale-75 hover:scale-90"
            >
              <img src={facebook} alt="facebook" className="w-9" />
            </Link>
            <Link
              to={
                "https://www.instagram.com/bukharienterprises898?igsh=MWhnYWE1bnJzc3Q1eQ=="
              }
              className="border-2 border-black rounded-full p-2 transition-all duration-300 scale-75 hover:scale-90"
              target="_blank"
            >
              <img src={instagram} alt="instagram" className="w-9" />
            </Link>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-semibold text-2xl">Quick Links</h3>
          <ul className="flex flex-col gap-1 text-[18px] transition-all duration-300">
            <li>
              <Link
                to={"/"}
                className="hover:text-green-600 transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={"/fruits"}
                className="hover:text-green-600 transition-all duration-300"
              >
                Fruits
              </Link>
            </li>
            <li>
              <Link
                to={"/vegetables"}
                className="hover:text-green-600 transition-all duration-300"
              >
                Vegetables
              </Link>
            </li>
            <li>
              <Link
                to={"/about-us"}
                className="hover:text-green-600 transition-all duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to={"/contact-us"}
                className="hover:text-green-600 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h3 className="font-semibold text-2xl">Contact Information</h3>
          <ul className="flex flex-col gap-3 text-[18px] transition-all duration-300">
            <li className="flex items-center gap-2">
              <img src={phone} alt="phone" className="w-9 h-9" />
              <p className="text-[18px]">+92-3096375479</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={email} alt="email" className="w-9 h-9" />
              <p className="text-[18px]">bukhariandsons786@gmail.com</p>
            </li>
            <li className="flex items-center gap-2">
              <img src={shop} alt="shop" className="w-9 h-9" />
              <p className="text-[18px]">
                X5W5+4P9, New Sabzi Mandi, Karachi, Pakistan.
              </p>
            </li>
          </ul>
        </div>
      </footer>
      <div className="text-center text-xl p-5 md:p-10 bg-black text-white mt-5">
        All Rights Reserved By Bukhari Enterprises.
      </div>
    </>
  );
};

export default Footer;
