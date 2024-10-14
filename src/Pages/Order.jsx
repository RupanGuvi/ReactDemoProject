import React from "react";
import { useNavigate } from "react-router-dom";

const Order = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-semibold mb-4">
        Thank You For Shopping With Us 😍
      </h2>
      <p>
        Your Order has been placed successfully you will recieve a confirmation
        mail shortly
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order Number : {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInformation.address}</p>
          <p>{order.shippingInformation.city}</p>
          <p>{order.shippingInformation.zipcode}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Products Ordered</h3>
          {order.products.map((ele, index) => {
            return (
              <div key={index} className="flex justify-between mt-2">
                <p>
                  {ele.name}*{ele.quantity}
                </p>
                <p>${ele.price * ele.quantity}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price:</span>
          <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
        </div>
        <div className="mt-6">
          <button className="bg-yellow-500 text-white py-2 px-4 hover:bg-yellow-700">
            Order Tracking
          </button>
          <button
            className="ml-4 bg-green-500 text-white py-2 px-4 hover:bg-green-700"
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
