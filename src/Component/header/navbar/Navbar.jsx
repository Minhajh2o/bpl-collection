import logo from "../../../assets/logo.png";
import { TbCoinFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <figure className="w-12 h-12">
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/selected-players">Fixture</a>
            </li>
            <li>
              <a href="/footer">Team</a>
            </li>
            <li>
              <a href="/footer">Schedule</a>
            </li>
          </ul>
          {/* coin */}
          <div>
            <p className="flex items-center gap-2 ml-2 border border-gray-300 px-3 md:px-4 py-2 rounded-lg text-sm md:text-base font-semibold">
              <span>0</span> Coin
              <TbCoinFilled className="text-yellow-400 text-2xl" />
            </p>
          </div>
          {/* hamburger menu */}
          <div className="block md:hidden dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-28 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/selected-players">Fixture</a>
              </li>
              <li>
                <a href="/footer">Team</a>
              </li>
              <li>
                <a href="/footer">Schedule</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
