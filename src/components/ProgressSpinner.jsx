import React from "react";

const ProgressSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-24 h-24 border-8 border-t-8 border-gradient-to-r from-blue-400 via-purple-500 to-pink-500 border-solid rounded-full animate-spin-slow shadow-lg">
        <div className="absolute top-1/2 left-1/2 w-12 h-12 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
    </div>
  );
};

export default ProgressSpinner;
