import SelectedPlayer from "../selectedPlayer/SelectedPlayer";
import alertIcon from "../../../assets/alert.png";

const SelectedPlayers = ({ selectedPlayers, removeSelectedPlayer }) => {
  return (
    <div className="mb-12 md:mb-24">

      {/* No Players Selected */}
      <div className="hidden">
        <div className="flex flex-col items-center justify-center text-center">
        {/* Alert Icon */}
        <figure className="h-64 w-64 mx-auto mb-6">
          <img src={alertIcon} alt="" />
        </figure>
        <h3 className="text-3xl text-gray-600 font-semibold">
          No players selected
        </h3>

        {/* Button */}
        <div className="border-2 border-[#E7FE29] p-1 md:p-2 mt-2 md:mt-4 w-fit rounded-2xl cursor-pointer group">
          <button
            className="bg-[#E7FE29] text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl text-base cursor-pointer group-hover:scale-105 transition-transform duration-300"
          >
            Add Players
          </button>
        </div>
      </div>
      </div>

      {/* Selected Players List */}
      <div className="space-y-4">
        {selectedPlayers.map((selectedPlayer) => (
          <SelectedPlayer
            key={selectedPlayer.id}
            selectedPlayer={selectedPlayer}
            removeSelectedPlayer={removeSelectedPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
