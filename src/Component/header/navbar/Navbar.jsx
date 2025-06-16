import logo from "../../../assets/logo-footer.png";
import { TbCoinFilled } from "react-icons/tb";

const Navbar = () => {
  return (
    <div>
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
          <ul className="menu menu-horizontal text-gray-600">
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
          <div>
            <p className="flex items-center gap-2 ml-2 border border-gray-300 px-4 py-2 rounded-lg">
              <span>0</span> Coin
              <TbCoinFilled className="text-yellow-color-500 text-xl" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
