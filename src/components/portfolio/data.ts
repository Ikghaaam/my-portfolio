import eventCampus from "@/assets/eventcampus.png";
import eventCampus1 from "@/assets/eventcampus1.png";
import eventCampus2 from "@/assets/eventcampus2.png";
import eventCampus3 from "@/assets/eventcampus3.png";
import eventCampus4 from "@/assets/eventcampus4.png";
import leadershipAcademy from "@/assets/leadershipAcademy.png";
import leadership1 from "@/assets/leadership1.png";
import leadership2 from "@/assets/leadership2.png";
import leadership3 from "@/assets/leadership3.png";
import leadership4 from "@/assets/leadership4.png";

import monPatientLogin1 from "@/assets/monPatientLogin1.png";
import monPatientNurse1 from "@/assets/monPatientNurse1.png";
import monPatientNurse2 from "@/assets/monPatientNurse2.png";
import monPatientNurse3 from "@/assets/monPatientNurse3.png";
import monPatientDoctor1 from "@/assets/monPatientDoctor1.png";
import monPatientDoctor2 from "@/assets/monPatientDoctor2.png";
import monPatientDoctor3 from "@/assets/monPatientDoctor3.png";
import monPatientDoctor4 from "@/assets/monPatientDoctor4.png";
import monPatientPharmacist1 from "@/assets/monPatientPharmacist1.png";


export const education = [
  {
    period: "2025 — 2027",
    degree: "Master's in Information Systems Engineering ",
    school: "Faculty of Sciences Semlalia, Cadi Ayyad University",
    place: "Marrakech, Morocco",
  },
  {
    period: "2024 — 2025",
    degree: "Bachelor's in Information Systems Engineering & Web Technologies",
    school: "EST",
    place: "Sidi Bennour, Morocco",
  },
  {
    period: "2022 — 2024",
    degree: "Specialized Technician Diploma in Digital Development — Full-Stack Web Option",
    school: "OFPPT ISTA Taddart",
    place: "Agadir, Morocco",
  },
  {
    period: "2021 — 2022",
    degree: "Baccalaureate in Physical Sciences",
    school: "High School Al Moutanabi",
    place: "Agadir, Morocco",
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  place: string;
  points: string[];
  link?: { href: string; label: string };
};

export const experience: Job[] = [  {
    company: "Ocean Connecting",
    role: "Full Stack Web Developer Intern",
    period: "April 2025 — June 2025",
    place: "Agadir, Morocco",
    points: [
      "Developed a medical web application using React.js, Node.js and Tailwind CSS following an Agile (Scrum) methodology.",
      "Integrated secure REST APIs with JWT authentication to manage application data and user access.",
      "Implemented real-time notifications using WebSocket and integrated Mapbox for location-based features.",
      "Collaborated with the development team to analyze requirements, solve technical issues, test features and improve the application.",
    ],
  },
  {
    company: "Agadir Vision Engineers",
    role: "Web Developer Intern",
    period: "June 2024 — August 2024",
    place: "Agadir, Morocco",
    points: [
      "Collaborated with the design team to convert UX/UI designs from Figma into functional web pages using HTML, CSS and JavaScript.",
    ],
  },
  {
    company: "Infosat Agadir",
    role: "Front-End Web Developer Intern",
    period: "April 2024",
    place: "Agadir, Morocco",
    points: [
      "Designed and developed a landing page for the LGP personnel management software using HTML, CSS, Bootstrap and JavaScript.",
      "Focused on creating a responsive, smooth and user-friendly interface.",
    ],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "Python", "PHP", "HTML", "CSS"],
  },
  {
    category: "Frameworks",
    items: ["React.js", "Angular", "Spring Boot", "Laravel"],
  },
  {
    category: "Technologies",
    items: ["Node.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    category: "Databases",
    items: ["MySQL", "SQL Server", "MongoDB", "Oracle"],
  },
  {
    category: "Architecture & Modeling",
    items: ["REST APIs", "System Design", "UML", "Merise"],
  },
  {
    category: "Tools & Methods",
    items: ["Git", "GitHub", "Agile (Scrum)"],
  },
  {
    category: "Testing & Quality",
    items: ["Postman", "JUnit", "Code Review", "Debugging"],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "Windows"],
  },
  {
    category: "DevOps & Cloud",
    items: ["Docker", "CI/CD Basics"],
  },
];

export type Project = {
  index: string;
  name: string;
  description: string;
  tech: string[];
  platform: string;
  type: string;
  github?: string;
  image?: string;
  gallery?: string[];
};

export const projects: Project[] = [
  {
    index: "01",
    name: "Event Campus",
    description:
    "A responsive web app centralizing campus club events — discovery, creation, and management — replacing scattered WhatsApp groups and posters. Features a role-based access system (student, organizer, admin) with an approval workflow: organizers create clubs and events, while admins moderate submissions and promote students to organizer status. Events and clubs are linked bidirectionally, enabling seamless navigation between an event and its host club. Includes a built-in messaging system between students and organizers, automated email/WhatsApp event reminders, waitlist notifications, and Google Calendar sync.",
    tech: ["React", "Laravel", "MySQL"],
    platform: "Web",
    type: "Academic Project",
    github: "https://github.com/Ikghaaam/Eventcampus-frontend",
    image: eventCampus,
    gallery: [
      eventCampus,
      eventCampus1,
      eventCampus2,
      eventCampus3,
      eventCampus4,
    ],
  },
  {
    index: "03",
    name: "Mon Patient",
    description:
      "A web platform connecting patients with doctors, home-visit nurses, and pharmacies. Patients book appointments and get matched with nearby healthcare professionals via geolocation; after a consultation, prescriptions are saved to their medical record and the platform shows nearby pharmacies that have the prescribed medication in stock.",
    tech: ["React", "Tailwind CSS", "Node.js", "Fastify", "Prisma", "MySQL", "Mapbox", "WebSockets"],
    platform: "Web",
    type: "Internship Project",
    image: monPatientLogin1,
    gallery: [
      monPatientLogin1,        // photo de connexion (1ère image affichée)

      monPatientNurse1,       // Interface infirmier(ère)
      monPatientNurse2,
      monPatientNurse3,

      monPatientDoctor1,      // Interface docteur
      monPatientDoctor2,
      monPatientDoctor3,
      monPatientDoctor4,

      monPatientPharmacist1,  // Interface pharmacien(ne)
    

  ],
  },  
  {
    index: "02",
    name: "Leadership Academy",
    description: "An interactive, gamified web platform for leadership training and self-assessment. Includes an admin CRM panel for tracking learner progress and managing course content.",
    tech: ["PHP", "MySQL", "HTML5", "CSS3", "JavaScript"],
    platform: "Web",
    type: "Academic Project",
    github: "https://github.com/Ikghaaam/Leadership-Academy",
    image: leadership4,
    gallery: [
      leadership4,
      leadershipAcademy,
      leadership3,
      leadership2,
      leadership1,
    ],
  },

];

export const achievements = [
  { value: "Full-Stack", label: "Development experience" },
  { value: "10+", label: "Featured projects" },
  { value: "End-to-End", label: "Project development" },
];

export const languages = [
  { name: "Arabic", level: "Native", value: 100 },
  { name: "French", level: "Fluent", value: 80 },
  { name: "English", level: "Intermediate", value: 60 },

];

export const certificates = [
  {
    title: "Prepare for a Career in Data Analysis",
    href: "https://www.linkedin.com/learning/certificates/49ea15c02991ff28928a58909a8653f0e0de0c7fc96fd1028b29997392662e3c?trk=share_certificate",
  },
  
];

export const hobbies = [
  "Learning new languages",
  "Exploring new technologies and creative ideas",
  "Swimming and spending time by the sea",
  "Traveling and discovering new cultures",
  "Photography",
];

export const contact = {
  email: "ikramguenna04@gmail.com",
  phone: "+212 6 31 65 09 32",
  github: "https://github.com/Ikghaaam",
  linkedin: "https://www.linkedin.com/in/ikram-guenna-2b8973293/",
};
