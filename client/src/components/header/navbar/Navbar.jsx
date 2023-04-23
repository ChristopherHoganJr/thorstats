import React, { useState } from "react";
import { Link } from "react-router-dom";

// components
import HomeButton from "./HomeButton";
import Mobile_Navbar_Button from "./mobile/Mobile_Navbar_Button";

const Navbar = ({ navOpen, setNavOpen }) => {
  return (
    <nav className='relative z-40 mx-auto m-w-7xl flex justify-between bg-blue-200 px-5 h-20 items-center'>
      <HomeButton />
      <Mobile_Navbar_Button navOpen={navOpen} setNavOpen={setNavOpen} />
    </nav>
  );
};

export default Navbar;
