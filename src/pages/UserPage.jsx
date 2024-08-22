import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { styles } from "../constants/styling.js";
import ProfileCard from "../components/ProfileCard";
import Navbar from "../components/UserNavbar.jsx";
import ProgressSpinner from "../components/ProgressSpinner.jsx";

const UserPage = () => {
  const [profiles, setProfiles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProfiles, setFilteredProfiles] = useState([]);

  useEffect(() => {
    // Fetch profiles from localStorage
    const storedProfiles = localStorage.getItem("profiles");
    if (storedProfiles) {
      const profilesData = JSON.parse(storedProfiles);
      setProfiles(profilesData);
      setFilteredProfiles(profilesData);
    }
  }, []);

  useEffect(() => {
    // Filter profiles based on the search term
    const filtered = profiles.filter(
      (profile) =>
      
        profile.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (profile.description &&
          profile.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase())) ||
        (profile.interests &&
          profile.interests.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (profile.contact &&
          profile.contact.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProfiles(filtered);
  }, [searchTerm, profiles]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div style={{ marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search by name, description, interest"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            width: "100%",
            maxWidth: "500px",
            boxSizing: "border-box",
          }}
          className="ml-96 mt-8"
        />
      </div>
      <div style={styles.container}>
        {filteredProfiles.length > 0 ? (
          filteredProfiles.map((profile) => (
            <Link
              to={`/profile/${profile.id}`}
              key={profile.id}
              style={styles.link}
            >
              <ProfileCard
                name={profile.name}
                description={profile.description}
                photo={profile.photo}
              />
            </Link>
          ))
        ) : (
          <ProgressSpinner />
        )}
      </div>
    </>
  );
};

export default UserPage;
