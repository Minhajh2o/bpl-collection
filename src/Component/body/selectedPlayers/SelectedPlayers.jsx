import EmptyState from "../emptyState/EmptyState";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, toggleActiveState, removeSelectedPlayer }) => {
  return (
    <div className="mb-12 md:mb-24">
      {selectedPlayers.length === 0 ? (
        // Empty State
        <EmptyState toggleActiveState={toggleActiveState} />
      ) : (
        <div className="space-y-4">
          {/* Selected Players List */}
          {selectedPlayers.map((selectedPlayer) => (
            <SelectedPlayer
              key={selectedPlayer.id}
              selectedPlayer={selectedPlayer}
              removeSelectedPlayer={removeSelectedPlayer}
            />
          ))}
          
          {/* Button */}
          <button
            onClick={() => toggleActiveState("available")}
            className="border-2 border-[#E7FE29] md:mt-4 w-full md:w-fit p-2 rounded-2xl cursor-pointer group"
          >
            <div className="bg-[#E7FE29] text-black font-bold py-3 px-4 md:py-3 md:px-6 rounded-xl text-base cursor-pointer group-hover:scale-105 transition-transform duration-300">
              Add More Players
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;
