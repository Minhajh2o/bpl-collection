import logo from "../../../assets/logo.png";
import { TbCoinFilled } from "react-icons/tb";

const Navbar = ({ coin }) => {
  return (
    <div className="backdrop-blur-md"
        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}>
      <div className="navbar h-20 bg-transparent shadow-sm max-w-[1240px] mx-auto">
        <div className="flex-1">
          <figure className="w-16 h-16 ml-2 md:ml-1">
            <img
              className="w-full h-full object-cover"
              src={logo}
              alt="BPL Logo"
            />
          </figure>
        </div>
        <div className="flex items-center">
          {/* menu */}
          <ul className="hidden md:flex menu menu-horizontal text-gray-600">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Fixture</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
            <li>
              <a href="#">Schedule</a>
            </li>
          </ul>
          {/* coin */}
          <div>
            <p className="flex items-center gap-2 ml-2 border border-gray-300 px-4 py-2 rounded-lg text-sm md:text-base font-semibold">
              <span>{coin}</span> Coin
              <TbCoinFilled className="text-amber-400 text-2xl" />
            </p>
          </div>
          {/* hamburger menu */}
          <div className="block md:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost px-2 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 p-2 shadow"
            >
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Fixture</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;