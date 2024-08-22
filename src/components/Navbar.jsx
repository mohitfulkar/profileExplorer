import React from "react";
import Logo from "../images/logo.png";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div className="w-full bg-blue-600 h-16 flex items-center justify-between px-6 shadow-md">
      <Link to="/" className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-auto" />
      </Link>
    </div>
  );
};

export default AdminNavbar;
