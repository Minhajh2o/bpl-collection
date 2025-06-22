import Player from "../player/Player";

const Players = ({ players, addSelectedPlayer, selectedPlayers }) => {

  const countSelected = selectedPlayers.length;
  return (
    <div className="mb-12 md:mb-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <h3 className="hidden text-[22px] md:text-[28px] font-semibold">
          Available Players
        </h3>
        <h3 className="text-[22px] md:text-[28px] font-semibold">
          Selected Players ({countSelected}/6)
        </h3>
        {/* Toggle buttons */}
        <div className="flex items-center justify-around w-full md:w-auto border border-gray-300 rounded-xl">
          <button className="cursor-pointer py-4 px-8 rounded-l-xl">
            Available
          </button>
          <button className="cursor-pointer py-4 px-8 rounded-r-xl">
            Selected (<span>{countSelected}</span>)
          </button>
        </div>
      </div>
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
    </div>
  );
};

export default Players;
