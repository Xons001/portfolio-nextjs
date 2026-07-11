"use client";

import Image from "next/image";
import { useLanguage } from "./LanguageProvider";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-shell relative overflow-hidden px-6 py-12 md:px-10 md:py-16 lg:py-20">
      <div className="absolute -left-16 top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-orange-400/10 blur-3xl" />
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
        <div className="relative z-10 text-center lg:text-left">
          <span className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
            {t.hero.badge}
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {t.hero.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-cyan-200 sm:text-xl">
            {t.hero.title}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {t.hero.intro}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["React", "Next.js", "Node.js", "TypeScript", "Cloud"].map(
              (skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {t.hero.contact}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              {t.hero.projects}
            </a>
            <a
              href="/files/CV-Sean-2026-esp.pdf"
              download="CV-Sean-2026-esp.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-200 transition hover:border-white hover:bg-white/5"
            >
              {t.hero.cv}
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {t.hero.stats.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-1 font-semibold text-white">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 via-sky-400/10 to-orange-400/20 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-4 shadow-2xl">
            <div className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
            <Image
              className="h-auto w-full rounded-[1.5rem] object-cover"
              src="/images/fotoSeanCV.jpg"
              alt="Portrait of Sean Saez Fuller"
              width={640}
              height={760}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
