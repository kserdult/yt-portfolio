import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMenu } from "react-icons/fi";

import { IoIosNotificationsOutline, IoLogoYoutube } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import "../style/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-left">
        <FiMenu className="icon menu" />
        <IoLogoYoutube className="icon youtube" />
        <span>Portfolio</span>
      </div>
      <div className="nav-mid">
        Search
        <CiSearch className="icon" />
      </div>
      <div className="nav-right">
        <IoIosNotificationsOutline className="icon notification" />
        <MdAccountCircle className="icon account" />
      </div>
    </nav>
  );
};

export default Navbar;
