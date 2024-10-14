import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { setSearchTerm } from "../Redux/productSlice";

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState(true);
  const [search,setSearch] = useState()
  const dispatch = useDispatch()
  const products = useSelector((state) => state.cart.products);
const navigate = useNavigate()
  const openLogin = () => {
    setLogin(true);
    setModalOpen(true);
  };
  const openRegister = () => {
    setLogin(false);
    setModalOpen(true);
  };
  const handleSearch = (e) =>{
          e.preventDefault();
          dispatch(setSearchTerm(search))
          navigate("/filter")
  }

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-center items-center">
        <div className="text-lg font-bold">
          <Link to={"/"}>Shopify</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search For Products..."
              className="w-full border py-2 px-4"
              onChange={(e)=>setSearch(e.target.value)}
            />
            <FaSearch className="absolute top-3 right-3 text-red-600" />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-xl" />
            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setModalOpen(true)}
          >
            SignIn | SignUp
          </button>
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
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {login ? (
          <SignIn openRegister={openRegister} />
        ) : (
          <SignUp openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
