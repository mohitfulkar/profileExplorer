import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import { FaBars } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/UserNavbar";

const ProfileDetails = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [showMap, setShowMap] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const storedProfiles = localStorage.getItem("profiles");
    if (storedProfiles) {
      const profiles = JSON.parse(storedProfiles);
      const foundProfile = profiles.find((p) => p.id === parseInt(id));
      setProfile(foundProfile);
    }
  }, [id]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  if (!profile) {
    return <div className="text-center text-red-500">Profile not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        <div className="flex-1">
          {!isSidebarOpen && (
            <button
              onClick={toggleSidebar}
              className="fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-full mt-16 shadow-lg hover:bg-blue-700 transition-colors duration-300"
            >
              <FaBars />
            </button>
          )}

          <div className="flex-1 max-w-screen-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="flex flex-wrap justify-between">
              <div className="flex-1 max-w-md mx-auto mb-6">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                />
                <h1 className="text-3xl font-bold text-center mb-2">
                  {profile.name}
                </h1>
                <p className="text-gray-700 text-center mb-4">
                  {profile.description}
                </p>
                <p className="text-gray-600 text-center mb-2">
                  <span className="font-semibold">Contact:</span>{" "}
                  {profile.contact || "N/A"}
                </p>
                <p className="text-gray-600 text-center mb-4">
                  <span className="font-semibold">Interests:</span>{" "}
                  {profile.interests || "N/A"}
                </p>
                <p className="text-gray-600 text-center mb-4">
                  <span className="font-semibold">Location:</span>{" "}
                  {profile.location || "N/A"}
                </p>

                <div className="text-center mb-4">
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">LinkedIn:</span>{" "}
                    {profile.socialMedia?.linkedin ? (
                      <a
                        href={profile.socialMedia.linkedin}
                        className="text-blue-600 hover:underline flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {profile.socialMedia.linkedin}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Twitter:</span>{" "}
                    {profile.socialMedia?.twitter ? (
                      <a
                        href={profile.socialMedia.twitter}
                        className="text-blue-600 hover:underline flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {profile.socialMedia.twitter}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                  <p className="text-gray-600 mb-2">
                    <span className="font-semibold">GitHub:</span>{" "}
                    {profile.socialMedia?.github ? (
                      <a
                        href={profile.socialMedia.github}
                        className="text-blue-600 hover:underline flex items-center justify-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {profile.socialMedia.github}
                      </a>
                    ) : (
                      "N/A"
                    )}
                  </p>
                </div>

                <div className="text-center mt-4">
                  <button
                    onClick={() => setShowMap((prev) => !prev)}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  >
                    {showMap ? "Hide" : "Summary"}
                  </button>
                </div>
              </div>

              {showMap && profile.coordinates && (
                <div className="flex-1 max-w-md">
                  <MapComponent
                    longitude={profile.coordinates.longitude}
                    latitude={profile.coordinates.latitude}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileDetails;
