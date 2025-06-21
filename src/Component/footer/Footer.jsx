import logo from "../../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="bg-gray-900 text-white text-center w-full relative z-0 -mt-48 pt-48">
      <div className="container max-w-7xl px-5 mx-auto space-y-16">

        <figure className="flex justify-center mt-8">
          <img src={logo} alt="BPL Logo" className="w-16 h-16 md:w-36 md:h-36 object-cover" />
        </figure>

        <div className="grid md:grid-cols-3 gap-10 text-sm items-start text-center md:text-left">

          {/* About Us */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">About Us</h3>
            <p className="text-gray-400 w-3/5">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="text-gray-400 space-y-1">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="space-y-3">
            <h3 className="font-semibold text-lg">Subscribe</h3>
            <p className="text-gray-400">
              Subscribe to our newsletter for the latest updates.
            </p>
            <form className='flex flex-col items-center justify-center md:flex-row w-full'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input border-none rounded-l-xl rounded-r-none p-4 h-11 text-black"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-r-xl shadow-md cursor-pointer hover:opacity-90 transition"
                    >
                        Subscribe
                    </button>
                </form>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-gray-500 border-t border-gray-700 p-8 text-sm ">
          ©2024 Your Company All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
