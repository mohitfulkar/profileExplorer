import React from "react";
import { styles } from "../constants/styling.js";

const ProfileCard = ({ name, description, photo }) => {
  return (
    <div style={styles.card}>
      <img src={photo} alt={name} style={styles.photo} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

export default ProfileCard;
