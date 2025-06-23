import banner from "../../../assets/bg-shadow.png";

const NewsLatter = () => {
  return (
    <div className="relative z-10 -mb-36 md:-mb-48 bg-white/10 p-4 md:p-6 border-2 border-white rounded-3xl">

      {/* Background Image */}
      <figure className="relative w-full h-64 md:h-96 rounded-2xl">
        <img
          className="w-full h-full object-cover bg-white border-2 border-gray-100 rounded-2xl"
          src={banner}
          alt=""
        />
      </figure>

      {/* Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 md:p-0 rounded-3xl">
        <h2 className="text-[22px] md:text-4xl font-bold mb-3 md:mb-4">Subscribe to our Newsletter</h2>
        <p className="text-sm md:text-xl text-gray-600 mb-4 md:mb-6">
          Get the latest updates and news right in your inbox!
        </p>

        {/* Subscription Form */}
        <form className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full">
          <input
            type="email"
            placeholder="Enter your email"
            className="input input-bordered rounded-xl p-4 h-12"
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 text-black font-semibold w-full md:w-fit px-6 py-3 rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLatter;
