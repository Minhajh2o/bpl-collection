import { RiAccountCircleFill } from "react-icons/ri";
import { BsFlagFill } from "react-icons/bs";

const Player = ({ player }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-sm rounded-lg overflow-hidden hover:shadow-lg transition-shadow">

        {/* Player Image */}
        <figure className="h-52 w-full overflow-hidden pt-6 px-6 hover:p-0 transition-all duration-300">
          <img
            src={player.image}
            alt={player.name}
            className="object-cover w-full h-full rounded-t-lg transition-transform duration-300 hover:scale-110"
          />
        </figure>

        <div className="p-6 space-y-4">
          {/* Player Name */}
          <div className="flex items-center gap-2">
            <RiAccountCircleFill className="w-6 h-6 text-gray-700" />
            <h2 className="card-title text-xl text-gray-800 font-bold">
              {player.name}
            </h2>
          </div>

          {/* Country & Role */}
          <div className="flex items-center gap-2 text-gray-600">
            <BsFlagFill className="w-5 h-5" />
            <p>{player.country}</p>
            <p className="ml-auto badge badge-outline text-sm">{player.role}</p>
          </div>

          {/* Divider */}
          <hr className="border-t border-gray-200" />

          {/* Stats */}
          <div className="flex items-center justify-between text-sm font-semibold">
            <p className="text-gray-700">Rating</p>
            <p className="text-gray-600">{player.rating} / 10</p>
          </div>

          {/* Batting Style */}
          <div className="flex items-center justify-between text-sm font-semibold">
            <p className="text-gray-700">Batting Style</p>
            <p className="text-gray-600">{player.batting_style}</p>
          </div>

          {/* Bowling Style */}
          <div className="flex items-center justify-between text-sm font-semibold">
            <p className="text-gray-700">Bowling Style</p>
            <p className="text-gray-600">{player.bowling_style}</p>
          </div>

          {/* Price and Button */}
          <div className="flex items-center justify-between text-sm">
            <p className="font-semibold text-gray-700">
              Price: <span className="text-black">{player.price}</span>
            </p>
            <button className="cursor-pointer py-2 px-4 xl:px-3 border-2 border-gray-300 rounded-lg hover:bg-gray-100 transition">
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
