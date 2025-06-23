import alertIcon from "../../../assets/alert.png";

const EmptyState = ({ toggleActiveState }) => {
    return (
        <div>
        <div className="flex flex-col items-center justify-center text-center mt-12 md:mt-16">
          {/* Alert Icon */}
          <figure className="h-64 w-64 mx-auto mb-6">
            <img src={alertIcon} alt="" />
          </figure>
          <h3 className="text-3xl text-gray-600 font-semibold">
            No players selected
          </h3>

          {/* Button */}
          <button
            onClick={() => toggleActiveState("available")}
            className="border-2 border-[#E7FE29] w-fit p-2 mt-4 rounded-2xl cursor-pointer group"
          >
            <div className="bg-[#E7FE29] text-black font-bold py-3 px-5 md:py-3 md:px-6 rounded-xl text-base cursor-pointer group-hover:scale-105 transition-transform duration-300">
              Add Players
            </div>
          </button>
        </div>
      </div>
    );
};

export default EmptyState;