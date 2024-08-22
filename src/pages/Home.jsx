import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
     <Navbar/>
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-24">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Let’s Get Started
          </h1>
          <div className="mt-4 flex justify-center space-x-6">
            <Link
              to="/admin"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300"
            >
              Admin
            </Link>
            <Link
              to="/userpage"
              className="bg-green-600 text-white px-6 py-3 rounded-lg text-xl font-semibold hover:bg-green-700 transition duration-300"
            >
              User
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
