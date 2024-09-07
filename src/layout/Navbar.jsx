import React, { useState } from "react";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="md:hidden block fixed bg-black rounded-md text-white p-3 right-5 top-5 z-20"
      >
        <Menu />
      </div>
      <nav
        className={`flex justify-evenly md:justify-between py-3 px-5 md:px-16 lg:px-32 items-center fixed top-0 ${
          show ? "left-0" : "-left-full"
        } md:left-0 z-20 w-full sm:w-[350px] md:w-full h-full md:h-fit flex-col md:flex-row bg-white transition-all duration-300`}
      >
        <img src={logo} alt="logo" className=" w-36 h-36 md:h-24 md:w-24" />
        <ul className="flex flex-col  md:flex-row items-center gap-4 md:text-xl text-2xl font-semibold ">
          <li>
            <Link onClick={() => setShow(!show)} to={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setShow(!show)} to={"/fruits"}>
              Fruits
            </Link>
          </li>
          <li>
            <Link onClick={() => setShow(!show)} to={"/vegetables"}>
              Vegetables
            </Link>
          </li>
          <li>
            <Link onClick={() => setShow(!show)} to={"/about-us"}>
              About
            </Link>
          </li>
          <button>
            <Link onClick={() => setShow(!show)} to={"/contact-us"}>
              Contact
            </Link>
          </button>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
