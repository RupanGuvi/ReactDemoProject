import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../Redux/cartSlice";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
import Address from "../Components/Address";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [address, setAddress] = useState("Taramani, Chennai");
  const [modalOpen,setModalOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-sm font-bold">
                <p>Products</p>
                <div className="flex space-x-12">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>SubTotal</p>
                  <p>Remove</p>
                </div>
              </div>
              {cart.products.map((ele, index) => {
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={ele.image}
                        alt={ele.name}
                        className="w-20 h-20 object-contain rounded"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">{ele.name}</h3>
                      </div>
                    </div>
                    <div className="flex space-x-14 items-center">
                      <p>${ele.price}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreaseQuantity(ele.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-2">{ele.quantity}</p>
                        <button
                          className="border-l text-xl px-1"
                          onClick={() => dispatch(increaseQuantity(ele.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(ele.quantity * ele.price).toFixed(2)}</p>
                      <button
                        className="text-red-600 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(ele.id))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping To:
                  <span className="text-sm font-bold">{address}</span>
                </p>
                <button className="text-blue-500 hover:underline mt-1 ml-2"
                onClick={()=>setModalOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price:</span>
                <span className="text-sm">${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-yellow-400 text-black py-2 hover:bg-yellow-600 
              font-bold"
              onClick={()=>navigate("/checkout")}
              >
                Checkout
              </button>
            </div>
          </div>
          <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} >
            <Address  setAddress={setAddress} setModalOpen={setModalOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
            alt="cart empty"
            className="h-96"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
