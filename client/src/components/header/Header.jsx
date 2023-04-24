import React, { useState, useContext } from "react";

// context
import { UserContext } from "../../contexts/UserContext";

// components
import Navbar from "./navbar/Navbar";
import Mobile_Navbar_Container from "./navbar/mobile/Mobile_Navbar_Container";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { currentUser } = useContext(UserContext);
  return (
    <header className='relative z-10'>
      <Navbar
        navOpen={navOpen}
        setNavOpen={setNavOpen}
        currentUser={currentUser}
      />
      <Mobile_Navbar_Container navOpen={navOpen} currentUser={currentUser} />
    </header>
  );
};

export default Header;
