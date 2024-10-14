import React from "react";

const SignUp = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">SignUp</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter Your FullName"
            className="w-full px-3 py-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter Your Mail Id"
            className="w-full px-3 py-2 border"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="w-full px-3 py-2 border"
            required
          />
        </div>

        <div className="mb-4">
          <button type="submit" className="w-full bg-red-600 text-white py-2">
            SignUp
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-600">Already Have An Account ?</span>
        <button className="text-red-700" onClick={openLogin}>
          SignIn
        </button>
      </div>
    </div>
  );
};

export default SignUp;
