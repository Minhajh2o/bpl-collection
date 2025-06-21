import React from "react";

const Players = () => {
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
            Selected(
            <span>{countSelected}</span>)
          </button>
        </div>
      </div>
    </div>
  );
};

export default Players;
