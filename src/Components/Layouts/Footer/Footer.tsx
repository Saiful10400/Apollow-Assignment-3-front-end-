import React from "react";
import { Link } from "react-router-dom";

//  import images.
import masterCard from "../../../assets/footer/masterCard.png";
import americanExress from "../../../assets/footer/americanExpress.png";
import visaCard from "../../../assets/footer/visaCard.png";
import paypal from "../../../assets/footer/paypal.png";
import CenterAlign from "../../Helper/CenterAlign";

import { RiLinkedinFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";

const Footer = () => {
  const MainManues = (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/products"}>Products</Link>
      <Link to={"/about-us"}>About Us</Link>
      <Link to={"/contact-us"}>Contact Us</Link>
    </>
  );

  return (
    <div className="bg-black text-gray-200  min-h-[200px] pt-10 pb-14">
      <CenterAlign>
        <div className="flex flex-col lg:flex-row justify-center items-center items-start lg:justify-start lg:w-[80%] gap-10 ">
          <ul className="flex flex-col items-start w-[20%] font-semibold gap-2">
            <span className="font-bold text-lg mb-3">Main Menu</span>
            {MainManues}
          </ul>

          <div className="lg:w-[30%]">
            <span className="font-bold text-lg text-center lg:text-start">
              Follow Us
            </span>
            <div className="flex items-center gap-5 pt-5">
              <a target="_blank" href="https://www.linkedin.com" className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full">
                <RiLinkedinFill />
              </a>
              <a target="_blank" href="https://x.com" className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full">
                <RiTwitterXFill />
              </a>
              <a target="_blank" href="https://www.instagram.com" className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full">
                <FaInstagram />
              </a>
              <a target="_blank" href="https://gmail.com" className="w-[30px] h-[30px] to-center bg-gray-800 rounded-full">
                <TfiEmail />
              </a>
             
            </div>
          </div>

          <div className="lg:w-[30%]">
            <span className="font-bold text-lg mb-3">Feedback</span>
            <h1 className="pt-5">
              You can send us Feedback via our Contact Form, support@keygem.com
              or Discord. If you are happy with our Service you can leave a
              Review on Trustpilot or Google.
            </h1>
          </div>
        </div>
        <div className="mt-8 flex justify-between items-start">
          <h1>
            Copyright © 2024 Mecha Store.
            <br />
            Powered by Shopify
          </h1>
          <div className="flex items-center justify-end gap-4">
            <img className="w-[50px]" src={masterCard} alt="" />
            <img className="w-[50px]" src={paypal} alt="" />
            <img className="w-[50px]" src={americanExress} alt="" />
            <img className="w-[50px]" src={visaCard} alt="" />
          </div>
        </div>
      </CenterAlign>
    </div>
  );
};

export default Footer;
