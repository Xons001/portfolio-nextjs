import Image from "next/image";
import {
  CodeBracketIcon,
  EyeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  videoCameraUrl,
  stack = [],
  highlights = [],
  featured = false,
  labels = {
    featured: "Featured project",
    source: "Source",
    demo: "Live demo",
    walkthrough: "Walkthrough",
  },
}) => {
  return (
    <article
      className={`overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/60 shadow-xl shadow-slate-950/20 ${
        featured ? "lg:grid lg:grid-cols-[1.25fr_0.95fr]" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-white/10 ${
          featured ? "h-72 lg:h-auto lg:border-b-0 lg:border-r" : "h-56"
        }`}
      >
        <Image
          src={imgUrl}
          alt={`${title} project preview`}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes={
            featured
              ? "(min-width: 1024px) 58vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        {featured && (
          <div className="absolute left-5 top-5 rounded-full border border-amber-300/40 bg-amber-300 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-950 shadow-lg shadow-slate-950/20">
            {labels.featured}
          </div>
        )}
      </div>
      <div className={`space-y-5 p-6 ${featured ? "md:p-8" : ""}`}>
        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100"
            >
              {item}
            </span>
          ))}
        </div>
        <div>
          <h3
            className={`font-semibold text-white ${
              featured ? "text-3xl md:text-4xl" : "text-2xl"
            }`}
          >
            {title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
        </div>
        <ul className="space-y-2 text-sm text-slate-300">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link
            href={gitUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
          >
            <CodeBracketIcon className="h-5 w-5" />
            {labels.source}
          </Link>
          {previewUrl && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              <EyeIcon className="h-5 w-5" />
              {labels.demo}
            </Link>
          )}
          {videoCameraUrl && (
            <Link
              href={videoCameraUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              <VideoCameraIcon className="h-5 w-5" />
              {labels.walkthrough}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
