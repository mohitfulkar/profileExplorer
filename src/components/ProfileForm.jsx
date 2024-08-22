import React, { useState, useEffect } from "react";

const ProfileForm = ({ onCreate, onUpdate, editingProfile, setEditingProfile }) => {
  const [profile, setProfile] = useState({
    name: "",
    description: "",
    contact: "",
    interests: "",
    socialMedia: {
      linkedin: "",
      twitter: "",
      github: "",
    },
    photo: "",
  });

  useEffect(() => {
    if (editingProfile) {
      setProfile(editingProfile);
    } else {
      setProfile({
        name: "",
        description: "",
        contact: "",
        interests: "",
        socialMedia: {
          linkedin: "",
          twitter: "",
          github: "",
        },
        photo: "",
      });
    }
  }, [editingProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSocialMediaChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      socialMedia: {
        ...prevProfile.socialMedia,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProfile) {
      onUpdate(editingProfile.id, profile);
      setEditingProfile(null);
    } else {
      onCreate(profile);
    }
    setProfile({
      name: "",
      description: "",
      contact: "",
      interests: "",
      socialMedia: {
        linkedin: "",
        twitter: "",
        github: "",
      },
      photo: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {editingProfile ? "Edit Profile" : "Add Profile"}
      </h2>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Description:</label>
        <input
          type="text"
          name="description"
          value={profile.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Contact:</label>
        <input
          type="text"
          name="contact"
          value={profile.contact}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Interests:</label>
        <input
          type="text"
          name="interests"
          value={profile.interests}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Photo URL:</label>
        <input
          type="text"
          name="photo"
          value={profile.photo}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL:</label>
        <input
          type="text"
          name="linkedin"
          value={profile.socialMedia.linkedin}
          onChange={handleSocialMediaChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">Twitter URL:</label>
        <input
          type="text"
          name="twitter"
          value={profile.socialMedia.twitter}
          onChange={handleSocialMediaChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL:</label>
        <input
          type="text"
          name="github"
          value={profile.socialMedia.github}
          onChange={handleSocialMediaChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-3 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {editingProfile ? "Update Profile" : "Create Profile"}
      </button>
    </form>
  );
};

export default ProfileForm;
