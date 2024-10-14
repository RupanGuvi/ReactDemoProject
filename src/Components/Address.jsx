import React, { useState } from "react";

const Address = ({ setAddress, setModalOpen }) => {
    const [newAddress,setNewAddress] = useState("")
const handleSubmit = () =>{
   setAddress(newAddress)
   setModalOpen(false)
}

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Address"
        className="border p-2 w-full mb-4"
        onChange={(e)=>setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button
          className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
          onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded" onClick={handleSubmit}>
          Save Address
        </button>
      </div>
    </div>
  );
};

export default Address;
