import React from "react";

const ProfileList = ({ profiles, onUpdate, onDelete }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1">
        {profiles.length > 0 ? (
          <ul className="space-y-4">
            {profiles.map((profile) => (
              <li
                key={profile.id}
                className="p-2 bg-white shadow-lg rounded-lg border border-gray-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-semibold text-gray-800">{profile.name}</p>
                  <div className="space-x-2">
                    <button
                      onClick={() => onUpdate(profile)}
                      className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => onDelete(profile.id)}
                      className="bg-red-500 text-white text-sm px-2 py-1 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No profiles available.</p>
        )}
        <div className="flex-none flex items-center justify-center p-6">
          <button
            onClick={() => onEdit(null)} // Trigger a form to add a new profile
            className="bg-green-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add New Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileList;
