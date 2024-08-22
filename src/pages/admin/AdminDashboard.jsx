import React, { useState, useEffect } from "react";
import { mockProfiles } from "../../constants/mockProfiles.js";
import ProfileList from "../../components/ProfileList.jsx";
import ProfileForm from "../../components/ProfileForm.jsx";
import AdminNavbar from "../../components/AdminNavbar.jsx";

const AdminDashboard = () => {
  const [profiles, setProfiles] = useState([]);
  const [editingProfile, setEditingProfile] = useState(null);

  useEffect(() => {
    const storedProfiles = localStorage.getItem("profiles");
    if (!storedProfiles) {
      setProfiles(JSON.parse(storedProfiles));
    } else {
      setProfiles(mockProfiles);
      localStorage.setItem("profiles", JSON.stringify(mockProfiles));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profiles));
  }, [profiles]);

  const createProfile = (newProfile) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = [
        ...prevProfiles,
        { id: prevProfiles.length + 1, ...newProfile },
      ];
      localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
      return updatedProfiles;
    });
  };

  const updateProfile = (id, updatedData) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = prevProfiles.map((profile) =>
        profile.id === id ? { ...profile, ...updatedData } : profile
      );
      localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
      return updatedProfiles;
    });
  };

  const deleteProfile = (id) => {
    setProfiles((prevProfiles) => {
      const updatedProfiles = prevProfiles.filter(
        (profile) => profile.id !== id
      );
      localStorage.setItem("profiles", JSON.stringify(updatedProfiles));
      return updatedProfiles;
    });
  };
  return (
    <>
      <AdminNavbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Profile Management
        </h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <ProfileList
              profiles={profiles}
              onUpdate={setEditingProfile}
              onDelete={deleteProfile}
            />
          </div>
          <div className="flex-1">
            <ProfileForm
              onCreate={createProfile}
              onUpdate={updateProfile}
              editingProfile={editingProfile}
              setEditingProfile={setEditingProfile}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
