import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(false);
  const [shippingToggle, setShippingToggle] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zipcode: "",
  });
 const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);

  const handleOrder = ()=>{
         const newOrder = {
            products:cart.products,
            orderNumber:"1234",
            shippingInformation: shippingInfo,
            totalPrice: cart.totalPrice
         }
         setOrder(newOrder)        
         navigate("/order")
  }

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">Product CheckOut</h3>
      <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
        <div className="md:w-2/3">
          {/* billing */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setBillingToggle(!billingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Billing Information
              </h3>
              {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-600">Name</label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Mail Id"
                  className="w-full px-3 py-2 border"
                />
              </div>
              <div>
                <label className="block text-gray-600">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  className="w-full px-3 py-2 border"
                />
              </div>
            </div>
          </div>
          {/* shipping */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setShippingToggle(!shippingToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Shipping Information
              </h3>
              {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <label className="block text-gray-600">Address</label>
                <input
                  type="text"
                  placeholder="Enter Your Address"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      address: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-600">City</label>
                <input
                  type="text"
                  placeholder="Enter Your City"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({ ...shippingInfo, city: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-gray-600">Zip Code</label>
                <input
                  type="text"
                  placeholder="Enter Your Zip Code"
                  className="w-full px-3 py-2 border"
                  onChange={(e) =>
                    setShippingInfo({
                      ...shippingInfo,
                      zipcode: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
          {/* payment */}
          <div className="border p-2 mb-6">
            <div
              className="flex items-center justify-between"
              onClick={() => setPaymentToggle(!paymentToggle)}
            >
              <h3 className="text-lg font-semibold mb-2">
                Payment Information
              </h3>
              {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
            </div>
            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block text-gray-700 ml-2">
                  Cash On Delivery
                </label>
              </div>
              <div className="flex items-center mb-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className="block text-gray-700 ml-2">Debit Card</label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">
                    Debit Card Information
                  </h3>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Card Number"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter Your Name As per Card"
                      className="border p-2 w-full rounded"
                      required
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YYYY"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                    <div className="w-1/2 mr-2">
                      <label className="block text-gray-700 font-semibold mb-2">
                        cvv
                      </label>
                      <input
                        type="text"
                        placeholder="XXX"
                        className="border p-2 w-full rounded"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-lg border">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.products.map((ele, index) => {
              return (
                <div key={index} className="flex justify-between">
                  <div className="flex items-center">
                    <img
                      src={ele.image}
                      alt={ele.name}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="ml-4">
                      <h4 className="text-md font-semibold">{ele.name}</h4>
                      <p className="text-gray-600">
                        {ele.price}*{ele.quantity}
                      </p>
                    </div>
                  </div>
                  <div className="text-gray-800">
                    ${ele.price * ele.quantity}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price:</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handleOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
