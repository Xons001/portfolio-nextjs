import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block rounded-full px-4 py-2 text-sm font-medium uppercase tracking-[0.22em] text-slate-300 transition hover:bg-white/5 hover:text-white md:px-0 md:py-0 md:text-xs"
    >
      {title}
    </Link>
  );
};

export default NavLink;
