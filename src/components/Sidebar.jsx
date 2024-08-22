import React from "react";
import { Link } from "react-router-dom";
import {mockProfiles} from "../constants/mockProfiles";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-30 shadow-lg`}
    >
      <div className="flex justify-between items-center p-4 bg-gray-900 border-b border-gray-700">
        <h2 className="text-xl font-semibold">Profiles</h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-300 hover:text-white text-2xl"
          aria-label="Close Sidebar"
        >
          <FaTimes />
        </button>
      </div>
      <div className="p-4 h-full overflow-y-auto">
        <ul className="space-y-2">
          {mockProfiles.map((profile) => (
            <li
              key={profile.id}
              className="transition-transform duration-200 transform hover:scale-105"
            >
              <Link
                to={`/profile/${profile.id}`}
                className="flex items-center p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-200"
                onClick={toggleSidebar}
              >
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-10 h-10 object-cover rounded-full mr-3"
                />
                <span className="text-lg font-medium">{profile.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
