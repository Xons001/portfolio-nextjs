"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { useLanguage } from "./LanguageProvider";

const EmailSection = () => {
  const [status, setStatus] = useState("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const { t } = useLanguage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (!response.ok || !resData.success) {
        throw new Error(
          resData.error ||
            t.contact.error
        );
      }

      setStatus("success");
      setFeedbackMessage(t.contact.success);
      e.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error.message || t.contact.error
      );
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-shell relative overflow-hidden px-6 py-10 md:px-10 md:py-12">
        <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative z-10">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-200">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-slate-300">
              {t.contact.intro}
            </p>
            <div className="mt-8 flex gap-3">
              <Link href="https://github.com/Xons001" target="_blank" rel="noreferrer">
                <Image src={GithubIcon} alt="GitHub profile" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/sean-saez-fuller/"
                target="_blank"
                rel="noreferrer"
              >
                <Image src={LinkedinIcon} alt="LinkedIn profile" />
              </Link>
            </div>
          </div>
          <div className="relative z-10 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 md:p-8">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="companyWebsite"
                tabIndex="-1"
                autoComplete="off"
                className="hidden"
              />
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t.contact.labels.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="block w-full rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white"
                  >
                    {t.contact.labels.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
                    placeholder={t.contact.placeholders.email}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  {t.contact.labels.company}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  autoComplete="organization"
                  className="block w-full rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder={t.contact.placeholders.company}
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  {t.contact.labels.subject}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="block w-full rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder={t.contact.placeholders.subject}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-white"
                >
                  {t.contact.labels.message}
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="6"
                  className="block w-full rounded-2xl border border-white/10 bg-slate-900/80 p-3 text-sm text-slate-100 outline-none transition focus:border-cyan-300"
                  placeholder={t.contact.placeholders.message}
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? t.contact.sending : t.contact.send}
              </button>
              <p
                className={`min-h-[1.5rem] text-sm ${
                  status === "error" ? "text-rose-300" : "text-emerald-300"
                }`}
                aria-live="polite"
              >
                {feedbackMessage}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
