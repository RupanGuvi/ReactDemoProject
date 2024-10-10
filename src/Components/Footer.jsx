import React from "react";
import { FaFacebook, FaGithub, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 px-4 md:px-16 lg:px-24 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
        <div>
          <h2 className="text-xl font-semibold">Shopify</h2>
          <p className="mt-4">
            Your One Stop Solution for all your shopping Needs.Shop with us and
            experience the best online shopping feel.
          </p>
        </div>
        <div className="flex flex-col md:items-center">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to={"/"} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to={"/shop"} className="hover:underline">
                Shop
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to={"/about"} className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-red-500 text-xl">
              <FaFacebook />{" "}
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <FaTwitter />{" "}
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <FaGithub />{" "}
            </a>
            <a href="#" className="hover:text-red-500 text-xl">
              <FaLinkedin />{" "}
            </a>
          </div>
          <form className="flex items-center justify-center mt-8">
            <input
              type="email"
              placeholder="Enter your Email Id"
              className="w-full p-2 rounded-l-lg bg-gray-700 border border-gray-400"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg border border-gray-200">
              ReachUs
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
