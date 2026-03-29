"use client";

import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    eyebrow: "Core stack",
    summary:
      "The technologies I use most comfortably when building interfaces, APIs and cloud-connected products.",
    content: (
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="text-sm uppercase tracking-[0.24em] text-cyan-200">
            Frontend
          </span>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>JavaScript and TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Angular</li>
            <li>HTML, CSS and Tailwind CSS</li>
            <li>Ionic</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="text-sm uppercase tracking-[0.24em] text-cyan-200">
            Backend
          </span>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>Node.js</li>
            <li>Express</li>
            <li>REST API design</li>
            <li>Prisma ORM</li>
            <li>MySQL and relational data modeling</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <span className="text-sm uppercase tracking-[0.24em] text-cyan-200">
            Cloud and delivery
          </span>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li>AWS, Azure and GCP familiarity</li>
            <li>Docker and Kubernetes</li>
            <li>Terraform</li>
            <li>Agile delivery mindset</li>
            <li>Automation and continuous improvement</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Background",
    id: "background",
    eyebrow: "Path so far",
    summary:
      "A quick view of the training and hands-on experience that shaped the way I work today.",
    content: (
      <div className="space-y-4">
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Education
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Cross-platform application development
          </h3>
          <p className="mt-2 text-slate-300">
            Higher vocational degree focused on software development across
            multiple platforms and practical project work.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Specialisation
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            .NET web platform bootcamp
          </h3>
          <p className="mt-2 text-slate-300">
            Additional training that helped broaden my backend perspective
            beyond the JavaScript ecosystem.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Experience
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Personal, academic and professional-style projects
          </h3>
          <p className="mt-2 text-slate-300">
            Hands-on work across frontend, backend and cloud-oriented tasks,
            always with a strong focus on maintainability and delivery.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    eyebrow: "Validated learning",
    summary:
      "Formal certifications that support the practical experience shown in the rest of the portfolio.",
    content: (
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Google Cloud
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Professional Cloud Developer
          </h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            Development
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            JavaScript and .NET Practitioner
          </h3>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
            AWS
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">
            Cloud Fundamentals
          </h3>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const activeTab = TAB_DATA.find((item) => item.id === tab) ?? TAB_DATA[0];

  return (
    <section className="pt-24" id="about">
      <div className="section-shell grid items-start gap-10 px-6 py-10 md:grid-cols-[0.86fr_1.14fr] md:px-10 md:py-12 xl:grid-cols-[0.8fr_1.2fr]">
        <div className="md:sticky md:top-28">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/20">
            <Image
              alt="Workspace and development setup"
              src="/images/about-image.jpg"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 42vw, 36vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Product-minded developer with a strong JavaScript core
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 lg:text-lg">
            I enjoy building interfaces that feel clear and dependable, and I
            like pairing that frontend focus with solid backend thinking. My
            experience spans React, Angular, Next.js, Node.js and cloud tooling,
            with a particular interest in turning messy requirements into clean,
            maintainable products.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <TabButton
              selectTab={() => setTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => setTab("background")}
              active={tab === "background"}
            >
              Background
            </TabButton>
            <TabButton
              selectTab={() => setTab("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8 min-h-[32rem] rounded-[1.75rem] border border-white/10 bg-slate-950/45 p-6">
            <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
              {activeTab.eyebrow}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              {activeTab.title}
            </h3>
            <p className="mt-3 max-w-2xl text-slate-300">
              {activeTab.summary}
            </p>
            <div className="mt-6">{activeTab.content}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
