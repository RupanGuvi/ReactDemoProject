import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import { Link } from "react-router-dom";
import Info from "../Components/Info";
import Category from "../Components/Category";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../Redux/productSlice";
import ProductCard from "../Components/ProductCard";



const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state=>state.product)

  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])

  return (
    <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
        <div className="w-full md:w-3/12">
          <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-black font-bold text-md px-2 py-2.5">
            Shop By Category
          </div>
          <ul className="space-y-6 bg-gradient-to-r from-teal-200 to-lime-200 border">
            {Categories.map((category, index) => {
              return (
                <li
                  key={index}
                  className="flex items-center text-sm font-serif mt-4"
                >
                  <div className="w-2 h-2 border border-pink-600 rounded-full mr-2"></div>
                  {category}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative flex items-center justify-center ">
          <img
            src="https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_960_720.png"
            alt="hero image"
            className="h-full w-full object-cover"
          />
          <div className="absolute text-center">
            <h1 className="text-black mb-4 font-bold text-lg md:text-xl">
              Discover Our Products
            </h1>
            <p className="text-black font-serif text-md md:text-lg">
              Explore a wide range of high quality products
            </p>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                <Link to={"/Shop"}>Shop Now</Link>
              </span>
            </button>
          </div>
        </div>
      </div>
      <Info />
      <Category />
      <div className="container mx-auto py-12">
        <h1 className="text-2xl font-bold mb-6 text-center">Top Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.slice(0,5).map((product,index)=>{
            return(
              <div key={index}>
                <ProductCard product={product} />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
