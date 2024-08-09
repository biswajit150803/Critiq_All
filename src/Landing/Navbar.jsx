import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo.png";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useStateAuth } from "../context/StateProvider";
const Menu = () => {
  return (
    <div className="flex flex-col md:flex-row sm:gap-8">
      <Link to="/home" className="navlink">
        Home
      </Link>
      <Link to="/company" className="navlink">
        Company
      </Link>
      {/* <Link to="/about" className="navlink">
        About Us
      </Link>
      <Link to="/faq" className="navlink">
        FAQ
      </Link> */}
      <Link to="/exchange" className="navlink">
        Nitro-Swap
      </Link>
    </div>
  );
};

const Navbar = () => {
  const { userData } = useStateAuth();
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gpt3__navbar-links_logo">
          <Link
            to={
              userData != null && userData.type === "user"
                ? "/home"
                : userData != null && userData.type === "company"
                ? "/company"
                : "/"
            }
            className="flex items-center"
          >
            <img src={logo} alt="GPT3 Logo" />{" "}
            <h1>
              <span className="picc">Criti-Q</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="hidden md:block">
          <Menu />
        </div>
        <div className="md:hidden flex justify-start items-center">
          {/* Responsive part for mobiles devices */}
          {/* hamburger menu */}
          <div className="relative ">
            {toggleMenu ? (
              <RiCloseLine
                className="gpt3__navbar-menu_icon"
                size={27}
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <RiMenu3Line
                className="gpt3__navbar-menu_icon"
                size={27}
                onClick={() => setToggleMenu(true)}
              />
            )}
            {toggleMenu && (
              <div className="absolute bg-zinc-800 top-12 -left-16 -translate-x-3/4 p-4 shadow-xs w-[70vw] mr-16 shadow-amber-200 rounded-md">
                <Menu />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
