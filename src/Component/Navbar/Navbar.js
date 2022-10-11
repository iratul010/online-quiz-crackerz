import React, { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "../NavLinks/NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, name: "Topics", path: "/" },
    { id: 2, name: "Statistics", path: "/statistics" },
    { id: 3, name: "Blog", path: "/blog" },
  ];
  return (
    <div className="md:flex justify-between items-center sticky  bg-green-400 text-white ">
      <div className="md:text-2xl  text-2xl md:ml-40  italic md:font-bold ">Online-Quiz-Game</div>
      <div>
        <div onClick={() => setOpen(!open)} className="h-6 w-6 md:hidden">
          {open ? <XMarkIcon></XMarkIcon> : <Bars3Icon></Bars3Icon>}
        </div>

        <ul
          className={`md:flex md:text-2xl p-3 w-full md:mr-40 justify-center absolute md:static duration-500 ease-in ${
            open ? "top-[56px]" : "top-[-124px]"
          } bg-green-400`}
        >
          {routes.map((route) => (
            <NavLinks key={route.id} route={route}></NavLinks>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
