import React, { useState } from "react";

// components
import Navbar from "./navbar/Navbar";
import Mobile_Navbar_Container from "./navbar/mobile/Mobile_Navbar_Container";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <header className='relative z-10'>
      <Navbar navOpen={navOpen} setNavOpen={setNavOpen} />
      <Mobile_Navbar_Container navOpen={navOpen} />
    </header>
  );
};

export default Header;
