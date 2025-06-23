import { RiDeleteBin6Line } from "react-icons/ri";

const SelectedPlayer = ({ selectedPlayer, removeSelectedPlayer }) => {
  return (
    <div className="flex justify-between items-center border border-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center gap-6">
        
        {/* Player Image */}
        <figure className="w-20 h-20 overflow-hidden rounded-md">
          <img
            src={selectedPlayer.image}
            alt={selectedPlayer.name}
            className="object-cover w-full h-full"
          />
        </figure>

        {/* Player Info */}
        <div>
          <h3 className="text-lg md:text-2xl font-semibold">{selectedPlayer.name}</h3>
          <p className="text-gray-500">{selectedPlayer.country}</p>
          <p className="text-gray-500">{selectedPlayer.batting_style}</p>
        </div>
      </div>
      
      {/* Delete Icon */}
      <button
        onClick={() => removeSelectedPlayer(selectedPlayer.id)}
        className="text-2xl text-red-400 hover:text-red-600 transition-colors duration-200"
      >
        <RiDeleteBin6Line  />
      </button>
    </div>
  );
};

export default SelectedPlayer;
