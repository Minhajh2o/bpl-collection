const ToggleSection = ({ isActive, selectedPlayers, toggleActiveState }) => {
  const countSelected = selectedPlayers.length;

  return (
    <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-4 mb-8">
      {/* Toggle buttons */}
      <div className="sticky top-20 z-20">
        <div className="grid grid-cols-2 w-full md:w-auto border border-gray-300 rounded-xl">
          <button
            onClick={() => toggleActiveState("available")}
            className={`py-4 px-8 rounded-l-xl cursor-pointer transition-none 
              ${
                isActive.available ? "bg-[#E7FE29] font-semibold" : "bg-white"
              }`}
          >
            Available
          </button>
          <button
            onClick={() => toggleActiveState("selected")}
            className={`py-4 px-8 rounded-r-xl cursor-pointer transition-none 
              ${isActive.selected ? "bg-[#E7FE29] font-semibold" : "bg-white"}`}
          >
            Selected (<span>{countSelected}</span>)
          </button>
        </div>
      </div>

      {/* Title */}
      <h3 className="text-[22px] md:text-[28px] font-semibold">
        {isActive.available
          ? "Available Players"
          : `Selected Players (${countSelected}/6)`}
      </h3>
    </div>
  );
};

export default ToggleSection;
