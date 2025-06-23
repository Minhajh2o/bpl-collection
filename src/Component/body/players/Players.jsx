import Player from "../player/Player";
import SelectedPlayers from "../selectedPlayers/SelectedPlayers";

const Players = ({
  players,
  isActive,
  selectedPlayers,
  toggleActiveState,
  addSelectedPlayer,
  removeSelectedPlayer,
}) => {
  const countSelected = selectedPlayers.length;
  return (
    <div className="mb-12 md:mb-24">
      <div className="flex flex-col-reverse md:flex-row-reverse justify-between items-center gap-4 mb-8">
        {/* Toggle buttons */}
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

        {/* Title */}
        <h3 className="text-[22px] md:text-[28px] font-semibold">
          {isActive.available
            ? "Available Players"
            : `Selected Players (${countSelected}/6)`}
        </h3>
      </div>

      {/* Player Cards */}
      {isActive.available ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {players.map((player) => (
            <Player
              key={player.id}
              player={player}
              selectedPlayers={selectedPlayers}
              addSelectedPlayer={addSelectedPlayer}
            />
          ))}
        </div>
      ) : (
        <SelectedPlayers
          selectedPlayers={selectedPlayers}
          toggleActiveState={toggleActiveState}
          removeSelectedPlayer={removeSelectedPlayer}
        />
      )}
    </div>
  );
};

export default Players;
