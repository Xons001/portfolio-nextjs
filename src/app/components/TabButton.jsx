const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-slate-400";

  return (
    <button type="button" onClick={selectTab} className="text-left">
      <p className={`mr-3 font-semibold transition hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <div
        className={`mt-2 mr-3 h-1 rounded-full bg-cyan-400 transition-all duration-200 ${
          active ? "w-16" : "w-0"
        }`}
      />
    </button>
  );
};

export default TabButton;
