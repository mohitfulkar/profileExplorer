import MaleImage from "../images/MaleImage.png";
import FemaleImage from "../images/FemaleImage.png";

let mockProfiles = [
  {
    id: 1,
    name: "John Doe",
    description:
      "Software Engineer with 5 years of experience in full-stack development.",
    photo: MaleImage,
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
    location: "London, United Kingdom",
  },
  {
    id: 2,
    name: "Jane Smith",
    description:
      "Creative Director specializing in branding and visual design.",
    photo: MaleImage,
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
    location: "London, United Kingdom",
  },
  {
    id: 3,
    name: "Alice Johnson",
    description: "Data Scientist with a passion for AI and machine learning.",
    photo: FemaleImage,
    contact: "Alice.doe@example.com",
    interests: "Coding, brainwashing, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/AliceJohnson",
      twitter: "https://twitter.com/AliceJohnson",
      github: "https://github.com/AliceJohnson",
    },
    coordinates: {
      latitude: 40.758032, 
      longitude: -73.985779,
    },
    location: "Times Square, USA",
  },
  {
    id: 4,
    name: "Robert Brown",
    description:
      "Experienced project manager with a focus on agile methodologies.",
    photo: MaleImage,
    contact: "Robert.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/RobertBrown",
      twitter: "https://twitter.com/RobertBrown",
      github: "https://github.com/RobertBrown",
    },
    coordinates: {
      latitude: 121.47039,
      longitude: 31.23213,
    },
    location:
      "Chong Hing Finance Center,Huang Pu Qu, Shang Hai Shi, China, 200003",
  },
  {
    id: 5,
    name: "Emily Davis",
    description:
      "UX/UI Designer with a knack for creating intuitive user interfaces.",
    photo: FemaleImage,
    contact: "Emily.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/EmilyDavis",
      twitter: "https://twitter.com/EmilyDavis",
      github: "https://github.com/EmilyDavis",
    },
    coordinates: {
      latitude: 52.926195,
      longitude: -112.471509,
    },
    location: "Camrose County Alberta Canada",
  },
  {
    id: 6,
    name: "Michael Green",
    description: "Digital Marketer with expertise in SEO and content strategy.",
    photo: MaleImage,
    contact: "Michael.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/MichaelGreen",
      twitter: "https://twitter.com/MichaelGreen",
      github: "https://github.com/MichaelGreen",
    },
    coordinates: {
      latitude: 53.590522,
      longitude: -118.266793,
    },
  },
  {
    id: 7,
    name: "Samantha Lee",
    description:
      "Front-end Developer with a love for creating responsive and interactive web applications.",
    photo: FemaleImage,
    contact: "Samantha.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/SamanthaLee",
      twitter: "https://twitter.com/SamanthaLee",
      github: "https://github.com/SamanthaLee",
    },
    coordinates: {
      latitude: 12.496365,
      longitude: 41.902783,
    },
    location: "Agensera, Ethiopia",
  },
  {
    id: 8,
    name: "David Wilson",
    description:
      "Systems Analyst with a focus on data analysis and business intelligence.",
    photo: MaleImage,
    contact: "David.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/DavidWilson",
      twitter: "https://twitter.com/DavidWilson",
      github: "https://github.com/DavidWilson",
    },
    coordinates: {
      latitude: 58.55021,
      longitude: -120.884932,
    },
    location: "Northern Rockies British Columbia Canada",
  },
  {
    id: 9,
    name: "Laura Martinez",
    description:
      "Product Manager with experience in managing cross-functional teams and product lifecycles.",
    photo: FemaleImage,
    contact: "Laura.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/LauraMartinez",
      twitter: "https://twitter.com/LauraMartinez",
      github: "https://github.com/LauraMartinez",
    },
    coordinates: {
      latitude: 44.105925,
      longitude: -98.092164,
    },
    location: "South Dakota United States",
  },
  {
    id: 10,
    name: "James Taylor",
    description:
      "Cybersecurity Expert specializing in threat detection and response.",
    photo: MaleImage,
    contact: "James.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/JamesTaylor",
      twitter: "https://twitter.com/JamesTaylor",
      github: "https://github.com/JamesTaylor",
    },
    coordinates: {
      latitude: 36.15003,
      longitude: -91.987201,
    },
    location: "Arkansas United States",
  },
  {
    id: 11,
    name: "Natalie Roberts",
    description:
      "Sales Executive with a proven track record in increasing revenue and building client relationships.",
    photo: FemaleImage,
    contact: "Natalie.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/NatalieRoberts",
      twitter: "https://twitter.com/NatalieRoberts",
      github: "https://github.com/NatalieRoberts",
    },
    coordinates: {
      longitude: 40.583587,
      latitude: -109.281811,
    },
    location: "Uintah County Utah USA",
  },
  {
    id: 12,
    name: "William Harris",
    description:
      "Operations Manager focused on improving operational efficiency and team productivity.",
    photo: MaleImage,
    contact: "William.doe@example.com",
    interests: "Coding, Hiking, Gaming",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/WilliamHarris",
      twitter: "https://twitter.com/WilliamHarris",
      github: "https://github.com/WilliamHarris",
    },
    coordinates: {
      latitude: 39.053515,
      longitude: -100.388508,
    },
    location: "Gove County Kansas USA",
  },
];

export { mockProfiles };
