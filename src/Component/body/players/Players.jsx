import { useEffect, useState } from "react";
import Player from "../player/Player";

const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("Players.json")
      .then((response) => response.json())
      .then((data) => setPlayers(data))
      .catch((error) => {
        console.error("Error fetching players:", error);
      });
  }, []);

  console.log(players);
  const countSelected = 0;
  return (
    <div className="mb-24">
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-[28px] font-semibold">Available Players</h3>
        <div className="flex items-center border border-gray-300 rounded-xl">
          <button className="cursor-pointer py-4 px-8 rounded-l-xl">
            Available
          </button>
          <button className="cursor-pointer py-4 px-8 rounded-r-xl">
            Selected (
            <span>{countSelected}</span>)
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {
            players.map((player) => <Player key={player.id} player={player} />)
        }
      </div>
    </div>
  );
};

export default Players;
