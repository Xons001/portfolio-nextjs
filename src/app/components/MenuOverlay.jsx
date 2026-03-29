import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="mx-6 mb-4 flex flex-col items-center gap-2 rounded-3xl border border-white/10 bg-slate-950/95 p-4 md:hidden">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
