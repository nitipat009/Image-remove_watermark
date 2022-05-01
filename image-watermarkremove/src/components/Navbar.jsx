import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import moon from '../assets/moon-pngrepo-com.png'
import sun from '../assets/sun-pngrepo-com.png'
function Navbar() {

  const [d_switch,setd_Switch] =useState(false)

  const handleSwitch = () => {
    if (d_switch === false) {
      document.documentElement.classList.add('dark')
      setd_Switch(true)
    } else {
      document.documentElement.classList.remove('dark')
      setd_Switch(false)
    }
  }

  return (
    <div className="absolute flex flex-row w-full h-16 items-center font-bold bg-purple-400 pr-4 pl-4 dark:bg-slate-900 dark:text-slate-400">
      <div className="flex flex-row w-full">
        <h1 className="w-full text-3xl">
          <NavLink to={"/"}>ชิงช้าจ้า...Remove watermark image</NavLink>
        </h1>
        <div className="flex flex-row w-full text-xl justify-end m-auto gap-24 items-center">
          
          <NavLink to={"/Model1"}>
            <h3 className="hover:bg-white hover:rounded-xl p-2 dark:hover:bg-slate-800">
              Model 1
            </h3>
          </NavLink>
          <NavLink to={"/Model2"}>
            <h3 className="hover:bg-white hover:rounded-xl p-2 dark:hover:bg-slate-800">
              Model 2
            </h3>
          </NavLink>
          <NavLink to={"/Aboutus"}>
            <h3 className="hover:bg-white hover:rounded-xl p-2 dark:hover:bg-slate-800">
              About Us!
            </h3>
          </NavLink>
          <button type="button" className="w-8 h-8" onClick={handleSwitch}>
            <img className="object-cover" src={d_switch ? moon : sun}></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
