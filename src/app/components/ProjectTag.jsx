const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "border-cyan-400 bg-cyan-400/10 text-white"
    : "border-slate-700 text-slate-300 hover:border-cyan-300 hover:text-white";
  return (
    <button
      type="button"
      className={`${buttonStyles} cursor-pointer rounded-full border px-5 py-2 text-sm font-medium uppercase tracking-[0.24em] transition md:text-base`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
