"use client";

import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { useLanguage } from "./LanguageProvider";

const tabIds = ["skills", "background", "certifications"];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const { t } = useLanguage();
  const activeTab = t.about.tabs[tab] ?? t.about.tabs.skills;

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
            {t.about.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {t.about.title}
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-300 lg:text-lg">
            {t.about.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            {tabIds.map((id) => (
              <TabButton
                key={id}
                selectTab={() => setTab(id)}
                active={tab === id}
              >
                {t.about.tabs[id].title}
              </TabButton>
            ))}
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
            <div className="mt-6">
              {tab === "skills" ? (
                <div className="grid gap-4 md:grid-cols-3">
                  {activeTab.groups.map((group) => (
                    <div
                      key={group.title}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <span className="text-sm uppercase tracking-[0.24em] text-cyan-200">
                        {group.title}
                      </span>
                      <ul className="mt-4 space-y-2 text-slate-300">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <div
                  className={
                    tab === "certifications"
                      ? "grid gap-4 md:grid-cols-3"
                      : "space-y-4"
                  }
                >
                  {activeTab.items.map(([title, description], index) => (
                    <div
                      key={title}
                      className={`rounded-2xl border p-5 ${
                        index === 0
                          ? "border-cyan-400/20 bg-cyan-400/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                        {activeTab.eyebrow}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold text-white">
                        {title}
                      </h4>
                      <p className="mt-2 text-slate-300">{description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
