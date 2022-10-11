import React from "react";
import { NavLink } from "react-router-dom";
const NavLinks = (route) => {
  const { path, name } = route.route;

  return (
    <li className="mr-12 underline md:no-underline text-2xl hover:text-green-200">
      {/* className={({ isActive }) => (isActive ? " text-emerald-200" : undefined)} 
      mr-12 underline md:no-underline text-2xl*/}
      <NavLink to={path}>{name}</NavLink>
    </li>
  );
};

export default NavLinks;
