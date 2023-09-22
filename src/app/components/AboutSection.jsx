"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex">
        <div className="flex-1 pr-4 border-r-2 border-white">
          <span className="">Frontend</span>
          <ul className="list-disc pl-5">
            <li>JavaScript</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Next.js</li>
          </ul>
        </div>
        <div className="flex-1 pl-4">
          <span className="">Backend</span>
          <ul className="list-disc pl-5">
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>ORM (Prisma)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Superior Degree: Cross-platform application development</li>
        <li>External Course: .Net Web Platform</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript and .Net Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          alt="about"
          src="/images/about-image.jpg"
          width={600}
          height={600}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full-stack developer with expertise in both front-end and
            back-end technologies. On the front-end, I specialize in React.js,
            TypeScript, HTML, CSS, and Tailwind, with an ongoing journey in
            mastering Next.js. On the back-end, my strengths lie in Node.js,
            REST API design, Postman, Express, and database management with ORM
            Prisma and MySQL. Committed to creating seamless user experiences
            and robust backend structures, I constantly seek to expand my skill
            set and embrace new challenges.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
