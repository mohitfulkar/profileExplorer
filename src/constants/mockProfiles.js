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
      latitude: 51.517527,
      longitude: -0.206273,
    },
    location: "252-240 Portobello Rd, London W11 1LL, UK",
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
      latitude: 51.518498,
      longitude: -0.128448,
    },
    location: "21 Bloomsbury St, London WC1B 3HF, UK",
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
      latitude: 40.758052,
      longitude: -73.985629,
    },
    location: "192-184 W 45th St, New York, NY 10036, USA",
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
      latitude: 31.232335,
      longitude: 121.469677,
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
    name: "Samay Mhatre",
    description: "Digital Marketer with expertise in SEO and content strategy.",
    photo: MaleImage,
    contact: "samaymhatre@example.com",
    interests: "Coding, Riding, reading",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/samaymhatre",
      twitter: "https://twitter.com/samaymhatre",
      github: "https://github.com/samaymhatre",
    },
    coordinates: {
      latitude: 18.591823,
      longitude: 73.738472,
    },
    location:
      "Hinjawadi Village, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057",
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
      latitude: 52.020465,
      longitude: 10.15436,
    },
    location: "Am Krohm 4, 31167 Bockenem, Germany",
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
      latitude: 50.131862,
      longitude: 8.682095,
    },
    location: "B8 19-7, 60322 Frankfurt am Main, Germany",
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
      latitude: 24.833458,
      longitude: -103.691792,
    },
    location: "35830 San Pedro de Ocuila, Durango, Mexico",
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
      latitude: 22.599241,
      longitude: -101.165101,
    },
    location: "78919 San Luis Potosi, Mexico",
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
      latitude: 57.03668,
      longitude: -111.608289,
    },
    location: "AB-63, Wood Buffalo, AB T0P 1C0, Canada",
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
