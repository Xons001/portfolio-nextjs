"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "FutLab",
    description:
      "Final degree project for Android focused on structuring a mobile experience around football data, training information and practical app flows.",
    image: "/images/projects/1.png",
    tag: ["All", "Mobile"],
    stack: ["Java", "Android Studio", "XML", "PostgreSQL"],
    highlights: [
      "Mobile UI built with native Android layouts",
      "Backend and data persistence work using Java and PostgreSQL",
      "Includes a recorded walkthrough for quick review",
    ],
    gitUrl: "https://github.com/Xons001/FutLabBaseDeDatos/wiki",
    videoCameraUrl: "https://youtu.be/lLxp1wpQjjY",
  },
  {
    id: 2,
    title: "GuideWorld",
    description:
      "Learning project in ASP.NET and C# centered on structuring a content-driven web app and getting comfortable with backend-first development patterns.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    stack: ["ASP.NET", "C#", "Web"],
    highlights: [
      "Good example of working outside the JavaScript ecosystem",
      "Focus on routing, page structure and CRUD-style flows",
      "Useful project for showing backend adaptability",
    ],
    gitUrl: "https://github.com/Xons001/GuideWorld",
    videoCameraUrl: "https://youtu.be/xAjAZZTRL3A",
  },
  {
    id: 3,
    title: "Monsters Rolodex",
    description:
      "Frontend project built during advanced React training, focused on component composition, state handling and the fundamentals of a polished client-side experience.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    stack: ["React", "JavaScript", "CSS"],
    highlights: [
      "Component-driven UI with reusable patterns",
      "Hands-on practice with state management and filtering logic",
      "Clear example of frontend fundamentals executed cleanly",
    ],
    gitUrl: "https://github.com/Xons001/monsters-rolodex",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="pt-24" id="projects">
      <div className="section-shell px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
            Selected work
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Projects that show how I think and build
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            This selection mixes mobile, web and frontend-heavy work. If I add
            one more project next, I would prioritise something newer and closer
            to the kind of production role I want now.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ProjectTag
            onClick={setTag}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={setTag}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={setTag}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul className="mt-10 grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                videoCameraUrl={project.videoCameraUrl}
                stack={project.stack}
                highlights={project.highlights}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
