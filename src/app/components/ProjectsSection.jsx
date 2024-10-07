"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Java Android Studio",
    description:
      "This was my final project in my superior Degree. In this project I used to develop the front-end XML and the backend I used Java with PostgreSQL, to deploy it I used Heroku",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Xons001/FutLabBaseDeDatos/wiki",
    videoCameraUrl: "https://youtu.be/lLxp1wpQjjY",
  },
  {
    id: 2,
    title: "ASP.Net C#",
    description:
      "In this project I used to develop the front-end XML and the backend I used Java with PostgreSQL, to deploy it I used Heroku",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xons001/GuideWorld",
    videoCameraUrl: "https://youtu.be/xAjAZZTRL3A",
  },
  {
    id: 3,
    title: "React.js Monsters Rolodex Project",
    description:
      "In this project, I developed a dynamic front-end application using React.js. During this project, I completed an advanced online course where I learned the latest features of React, including its routing system, hooks, and component optimizations. This experience deepened my understanding of state management, React Router for client-side routing, and configuring modern React applications.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Xons001/monsters-rolodex",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              videoCameraUrl={project.videoCameraUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
