import React from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-center items-center">
        <div className="text-lg font-bold">
          <Link to={"/"}>Shopify</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input
              type="text"
              placeholder="Search For Products..."
              className="w-full border py-2 px-4"
            />
            <FaSearch className="absolute top-3 right-3 text-red-600" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"}>
            <FaShoppingCart className="text-xl" />
          </Link>
          <button className="hidden md:block">SignIn | SignUp</button>
          <button className="block md:hidden">
            <FaUser className="text-xl" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-md font-serif">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/shop"} className="hover:underline">
          Shop
        </Link>
        <Link to={"/about"} className="hover:underline">
          About
        </Link>
        <Link to={"/contact"} className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
