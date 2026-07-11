"use client";

import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { useLanguage } from "./LanguageProvider";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const navLinks = [
    {
      title: t.nav.about,
      path: "#about",
    },
    {
      title: t.nav.projects,
      path: "#projects",
    },
    {
      title: t.nav.contact,
      path: "#contact",
    },
  ];

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-[1480px] flex-wrap items-center justify-between px-6 py-4 md:px-8 xl:px-10">
        <Link
          href="/"
          className="flex flex-col text-white transition hover:text-cyan-200"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.28em]">
            Seán Sáez Fuller
          </span>
          <span className="text-xs text-slate-400">
            {t.nav.subtitle}
          </span>
        </Link>
        <div className="flex items-center gap-3 md:hidden">
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            {["en", "es"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                  language === item
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          {!navbarOpen ? (
            <button
              type="button"
              onClick={() => setNavbarOpen(true)}
              aria-label="Open navigation"
              className="flex items-center rounded-full border border-white/15 px-3 py-2 text-slate-200 transition hover:border-white hover:text-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setNavbarOpen(false)}
              aria-label="Close navigation"
              className="flex items-center rounded-full border border-white/15 px-3 py-2 text-slate-200 transition hover:border-white hover:text-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div
          className="menu hidden items-center gap-6 md:flex md:w-auto"
          id="navbar"
        >
          <ul className="mt-0 flex md:flex-row md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <div className="flex rounded-full border border-white/10 bg-white/5 p-1">
            {["en", "es"].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-1 text-xs font-semibold uppercase transition ${
                  language === item
                    ? "bg-cyan-400 text-slate-950"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
