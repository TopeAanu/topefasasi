// app/page.tsx
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import SocialsSection from "./components/SocialsSection";
import Footer from "./components/Footer";

export default function Home() {
  // Define the skills data here
  const skillsData = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Figma", "Responsive Design"],
    },
    {
      category: "Learning",
      items: ["GraphQL", "AWS", "Docker", "Redux", "React Native"],
    },
  ];

  // Define project data
  const projectsData = [
    {
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce website with product filtering and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "/images/project1.jpg"
    },
    {
      title: "Task Management App",
      description: "A productivity application for organizing and tracking personal and team tasks.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Firebase"],
      imageUrl: "/images/project2.jpg"
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website showcasing web development projects.",
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      imageUrl: "/images/project3.jpg"
    }
  ];

  return (
    <div>
      <Navbar />
      <AboutSection />
      <SkillsSection skills={skillsData} />
      <ProjectSection projects={projectsData} />
      <SocialsSection />
      <Footer />
    </div>
  );
}