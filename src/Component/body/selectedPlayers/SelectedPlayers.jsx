import EmptyState from "../emptyState/EmptyState";
import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers, removeSelectedPlayer }) => {
  return (
    <div className="mb-12 md:mb-24">
      {selectedPlayers.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {selectedPlayers.map((selectedPlayer) => (
            <SelectedPlayer
              key={selectedPlayer.id}
              selectedPlayer={selectedPlayer}
              removeSelectedPlayer={removeSelectedPlayer}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectedPlayers;
