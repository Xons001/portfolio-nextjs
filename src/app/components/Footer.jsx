"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="mt-12 border-t border-white/10 py-8 text-white">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <Link
          href="/"
          className="text-sm font-semibold uppercase tracking-[0.24em]"
        >
          Seán Sáez Fuller
        </Link>
        <p className="text-sm text-slate-400">{t.footer.text}</p>
        <p className="text-sm text-slate-500">
          {new Date().getFullYear()} {t.footer.rights}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
