import ToggleSection from "../../toggleSection/ToggleSection";
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
  return (
    <div className="mb-12 md:mb-24">
      <ToggleSection
        isActive={isActive}
        selectedPlayers={selectedPlayers}
        toggleActiveState={toggleActiveState}
      />

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
