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
            <li>Angular</li>
            <li>Typescript</li>
            <li>Next.js</li>
            <li>HTML & CSS</li>
            <li>Tailwind CSS</li>
            <li>Ionic CSS</li>
          </ul>
        </div>
        <div className="flex-1 pl-4 border-r-2 border-white">
          <span className="">Backend</span>
          <ul className="list-disc pl-5">
            <li>Node.js</li>
            <li>Express</li>
            <li>MySQL</li>
            <li>ORM (Prisma)</li>
            <li>REST APIs</li>
          </ul>
        </div>
        <div className="flex-1 pl-4">
          <span className="">Cloud & DevOps</span>
          <ul className="list-disc pl-5">
            <li>AWS, Azure, GCP</li>
            <li>Docker & Kubernetes</li>
            <li>Terraform</li>
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
        <li>Bootcamp: .Net Web Platform</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google Professional Cloud Developer</li>
        <li>JavaScript and .Net Practitioner</li>
        <li>Cloud Fundamentals with AWS</li>
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
    <section className="text-white pt-20 -mt-20" id="about">
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
            I am a Full Stack Developer specialized in modern web technologies.
            On the front-end, I have extensive experience with React.js,
            Angular, TypeScript, HTML, CSS, Tailwind and Ionic. I am proficient
            in building interactive user interfaces and seamless user
            experiences. On the back-end, my expertise includes Node.js,
            Express, Prisma ORM, and MySQL, focusing on REST API design and
            robust database management. I have worked on several projects, such
            as secure file transfer platforms and internal tools to optimize
            business processes. Eager to continuously grow and embrace new
            challenges, I am also familiar with DevOps practices and cloud
            solutions like AWS, Azure, and GCP. I enjoy working in Agile
            environments, where collaboration and innovation thrive.
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
