import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { mockProfiles } from "./constants/mockProfiles.js";

// Function to initialize localStorage
const initializeLocalStorage = () => {
  // Check if profiles already exist in localStorage
  const profiles = localStorage.getItem("profiles");
  if (profiles) {
    console.log("Initializing localStorage with mockProfiles...");
    localStorage.setItem("profiles", JSON.stringify(mockProfiles));
  }
};

// Call the initialization function
initializeLocalStorage();

// Render the app
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
