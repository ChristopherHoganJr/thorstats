import React from "react";
import { Link } from "react-router-dom";

const Mobile_Navbar_Link = ({ url, icon, title }) => {
  return (
    <Link
      to={url}
      className='border-2 border-black rounded-md flex gap-2 bg-yellow-200 py-5 justify-center'>
      {icon} {title}
    </Link>
  );
};

export default Mobile_Navbar_Link;
