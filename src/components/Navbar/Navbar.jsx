import { useState } from "react";
import "./Navbar.css"; // Import CSS file for styling
import LightDarkToggle from "../ToggleButton/LightDarkToggle";
import { PiPlanetFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { MdEmojiEvents } from "react-icons/md";
import { PiVideoFill } from "react-icons/pi";
import { ImUserPlus } from "react-icons/im";
import { useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  //get location
  const location = useLocation(); // Get the current location

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className={`nav-menu ${showMenu ? "open" : ""}`}>
          <div className="singleNav">
            <li className="nav-item">
              <PiPlanetFill />
              <a
                href="/myspace"
                className={`nav-item ${
                  location.pathname === "/myspace" ? "active" : ""
                }`}
              >
                My Space
              </a>
            </li>
          </div>
          <div className="singleNav">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active" : ""
              }`}
            >
              <FaHome />
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </div>
          <div className="singleNav">
            <li
              className={`nav-item ${
                location.pathname === "/events" ? "active" : ""
              }`}
            >
              <MdEmojiEvents />
              <a href="/events" className="nav-link">
                Events
              </a>
            </li>
          </div>
          <div className="singleNav">
            <li
              className={`nav-item ${
                location.pathname === "/videos" ? "active" : ""
              }`}
            >
              <PiVideoFill />
              <a href="/videos" className="nav-link">
                Videos
              </a>
            </li>
          </div>
          <div className="singleNav">
            <li
              className={`nav-item ${
                location.pathname === "/live" ? "active" : ""
              }`}
            >
              <FaHome />
              <a href="/live" className="nav-link">
                Live
              </a>
            </li>
          </div>
          <div className="singleNav">
            <li
              className={`nav-item ${
                location.pathname === "/register" ? "active" : ""
              }`}
            >
              <ImUserPlus />
              <a href="/register" className="nav-link">
                Register
              </a>
            </li>
          </div>
          {
            showMenu && <li>
            <button
              type="button"
              onClick={() => setShowMenu(!showMenu)}
              className="closeMenuBtn"
            >
              <IoClose />
            </button>
          </li>
          }
          
        </ul>

        <div
          className={`menu-icon ${showMenu ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </div>
        <LightDarkToggle />
      </div>
    </nav>
  );
};

export default Navbar;
