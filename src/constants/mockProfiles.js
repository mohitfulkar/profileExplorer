// mockData.js
import Pic1 from "../images/pic1.jpg";
import Pic2 from "../images/pic2.jpg";
import Pic3 from "../images/pic3.jpg";
import Pic4 from "../images/pic4.jpg";
import Pic5 from "../images/pic5.jpg";
import Pic6 from "../images/pic6.jpg";
import Pic7 from "../images/pic7.jpg";
import Pic8 from "../images/Pic8.jpg";
import Pic9 from "../images/Pic9.jpg";
import Pic10 from "../images/Pic10.jpg";

let mockProfiles = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Software Engineer with 5 years of experience in full-stack development.",
    photo: Pic1,
    contact: "John.doe@example.com",
    interests: "Coding, Football, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/JohnDoe",
      twitter: "https://twitter.com/JohnDoe",
      github: "https://github.com/robertbroJohnDoewn",
    },
    coordinates: {
      longitude: -0.127647,
      latitude: 51.507351,
    },
  },
  {
    id: 2,
    name: "Jane Smith",
    description:
      "Creative Director specializing in branding and visual design.",
    photo: Pic2,
    contact: "Jane.doe@example.com",
    interests: "Coding, Cricket, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/JaneSmith",
      twitter: "https://twitter.com/JaneSmith",
      github: "https://github.com/JaneSmith",
    },
    coordinates: {
      longitude: -0.127647,
      latitude: 51.507351,
    },
  },
  {
    id: 3,
    name: "Alice Johnson",
    description: "Data Scientist with a passion for AI and machine learning.",
    photo: Pic3,
    contact: "Alice.doe@example.com",
    interests: "Coding, brainwashing, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/AliceJohnson",
      twitter: "https://twitter.com/AliceJohnson",
      github: "https://github.com/AliceJohnson",
    },
    coordinates: {
      longitude: -74.009057,
      latitude: 40.712776, 
    },
  },
  {
    id: 4,
    name: "Robert Brown",
    description:
      "Experienced project manager with a focus on agile methodologies.",
    photo: Pic4,
    contact: "Robert.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/RobertBrown",
      twitter: "https://twitter.com/RobertBrown",
      github: "https://github.com/RobertBrown",
    },
    coordinates: {
      longitude: 2.294481,
      latitude: 48.85837,
    },
  },
  {
    id: 5,
    name: "Emily Davis",
    description:
      "UX/UI Designer with a knack for creating intuitive user interfaces.",
    photo: Pic5,
    contact: "Emily.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/EmilyDavis",
      twitter: "https://twitter.com/EmilyDavis",
      github: "https://github.com/EmilyDavis",
    },
    coordinates: {
      longitude: 151.215256,
      latitude: -33.856159,
    },
  },
  {
    id: 6,
    name: "Michael Green",
    description: "Digital Marketer with expertise in SEO and content strategy.",
    photo: Pic6,
    contact: "Michael.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/MichaelGreen",
      twitter: "https://twitter.com/MichaelGreen",
      github: "https://github.com/MichaelGreen",
    },
    coordinates: {
      longitude: 139.699305,
      latitude: 35.689487,
    },
  },
  {
    id: 7,
    name: "Samantha Lee",
    description:
      "Front-end Developer with a love for creating responsive and interactive web applications.",
    photo: Pic7,
    contact: "Samantha.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/SamanthaLee",
      twitter: "https://twitter.com/SamanthaLee",
      github: "https://github.com/SamanthaLee",
    },
    coordinates: {
      longitude: 12.496365,
      latitude: 41.902783,
    },
  },
  {
    id: 8,
    name: "David Wilson",
    description:
      "Systems Analyst with a focus on data analysis and business intelligence.",
    photo: Pic8,
    contact: "David.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/DavidWilson",
      twitter: "https://twitter.com/DavidWilson",
      github: "https://github.com/DavidWilson",
    },
    coordinates: {
      longitude: -43.172896,
      latitude: -22.906847,
    },
  },
  {
    id: 9,
    name: "Laura Martinez",
    description:
      "Product Manager with experience in managing cross-functional teams and product lifecycles.",
    photo: Pic9,
    contact: "Laura.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/LauraMartinez",
      twitter: "https://twitter.com/LauraMartinez",
      github: "https://github.com/LauraMartinez",
    },
    coordinates: {
      longitude: -3.70379,
      latitude: 40.416775,
    },
  },
  {
    id: 10,
    name: "James Taylor",
    description:
      "Cybersecurity Expert specializing in threat detection and response.",
    photo: Pic10,
    contact: "James.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/JamesTaylor",
      twitter: "https://twitter.com/JamesTaylor",
      github: "https://github.com/JamesTaylor",
    },
    coordinates: {
      longitude: 116.407396,
      latitude: 39.9042,
    },
  },
  {
    id: 11,
    name: "Natalie Roberts",
    description:
      "Sales Executive with a proven track record in increasing revenue and building client relationships.",
    photo: Pic5,
    contact: "Natalie.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/NatalieRoberts",
      twitter: "https://twitter.com/NatalieRoberts",
      github: "https://github.com/NatalieRoberts",
    },
    coordinates: {
      longitude: -87.629798,
      latitude: 41.878114,
    },
  },
  {
    id: 12,
    name: "William Harris",
    description:
      "Operations Manager focused on improving operational efficiency and team productivity.",
    photo: Pic6,
    contact: "William.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/WilliamHarris",
      twitter: "https://twitter.com/WilliamHarris",
      github: "https://github.com/WilliamHarris",
    },
    coordinates: {
      longitude: 18.424055,
      latitude: -33.924869,
    },
  },
];

export const getProfiles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockProfiles);
    }, 500); // Simulate network delay
  });
};

export const addProfile = async (newProfile) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const id = mockProfiles.length
        ? Math.max(mockProfiles.map((p) => p.id)) + 1
        : 1;
      mockProfiles.push({ ...newProfile, id });
      resolve();
    }, 500); // Simulate network delay
  });
};

export const updateProfile = async (updatedProfile) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockProfiles = mockProfiles.map((profile) =>
        profile.id === updatedProfile.id ? updatedProfile : profile
      );
      resolve();
    }, 500); // Simulate network delay
  });
};

export const deleteProfile = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockProfiles = mockProfiles.filter((profile) => profile.id !== id);
      resolve();
    }, 500); // Simulate network delay
  });
};
export { mockProfiles };
