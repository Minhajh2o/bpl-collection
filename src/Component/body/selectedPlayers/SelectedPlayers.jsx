import SelectedPlayer from "../selectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ selectedPlayers }) => {
  return (
    <div className="mb-12 md:mb-24">
      <div className="space-y-4">
        {selectedPlayers.map((selectedPlayer) => (
          <SelectedPlayer
            key={selectedPlayer.id}
            selectedPlayer={selectedPlayer}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
