"use client";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { useLanguage } from "./LanguageProvider";

const filters = ["all", "web", "mobile", "data"];

const ProjectsSection = () => {
  const [tag, setTag] = useState("all");
  const { t } = useLanguage();
  const filteredProjects = t.projects.items.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section className="pt-24" id="projects">
      <div className="section-shell px-6 py-10 md:px-10 md:py-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
            {t.projects.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300">
            {t.projects.intro}
          </p>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <ProjectTag
              key={filter}
              onClick={setTag}
              id={filter}
              name={t.projects.filters[filter]}
              isSelected={tag === filter}
            />
          ))}
        </div>
        <ul className="mt-10 grid gap-8 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              className={project.featured ? "lg:col-span-3" : ""}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                videoCameraUrl={project.videoCameraUrl}
                stack={project.stack}
                highlights={project.highlights}
                featured={project.featured}
                labels={{
                  featured: t.projects.featured,
                  source: t.projects.source,
                  demo: t.projects.demo,
                  walkthrough: t.projects.walkthrough,
                }}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
