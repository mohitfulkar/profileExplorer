import React, { useState } from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { RiAdminFill, RiArrowDownSLine } from "react-icons/ri";

const AdminNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="w-full bg-blue-600 h-16 flex items-center justify-between px-6 shadow-md">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </Link>
      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2 text-white cursor-pointer relative" onClick={toggleDropdown}>
          <RiAdminFill className="text-2xl" />
          <span className="text-lg font-semibold">ADMIN</span>
          <RiArrowDownSLine className="text-lg" />
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 shadow-lg rounded-lg">
              <Link
                to="/userpage"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                Admin
              </Link>
              <Link
                to="/userpage"
                className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-300"
                onClick={() => setIsDropdownOpen(false)}
              >
                User
              </Link>
            </div>
          )}
        </div>
        <Link
          to="/"
          className="bg-blue-700 text-white h-10 w-20 rounded-lg flex items-center justify-center text-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default AdminNavbar;
