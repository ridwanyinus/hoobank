import { useState, react } from "react";

import { close, logo, menu } from "../assets";

import { navLinks } from "../constants";

const Navbar = () => {
   const [toggle, settoggle] = useState(false);

   return (
      <nav className="w-full flex py-6 justify-between items-center navbar md:px-16">
         <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
         <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
               <li
                  key={nav.id}
                  className={`font-poppins font-normal cursor-pointer text-[16px] px-4 ${
                     index === navLinks.length - 1 ? "mr-0" : "mr-10"
                  } text-white hover:text-secondary hover:scale-up-center  navLinks`}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
               </li>
            ))}
         </ul>

         <div className="sm:hidden flex flex-1 justify-end items-center hover:scale-up-center  navLinks">
            <img src={toggle ? close : menu} alt="menu" className="w-[28px] h-[28px] object-contain" onClick={() => settoggle((prev) => !prev)} />

            <div className={`${toggle ? "flex" : "hidden"} p-[2rem] bg-black-gradient absolute top-[40px]  right-0  mt-[1rem]  rounded-xl sidebar min-w-[210px]  justify-end items-end `}>
               <ul className="list-none flex  justify-end items-center flex-1 flex-col">
                  {navLinks.map((nav, index) => (
                     <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mb-4"} text-white  hover:text-secondary `}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;
