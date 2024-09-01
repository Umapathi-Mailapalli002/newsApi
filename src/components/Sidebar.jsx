"use client"
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';


function Sidebar() {
 const isSmallScreen = useMediaQuery({maxWidth : 770})
 const activeNav = "hover:bg-blue-700 dark:hover:bg-gray-500 bg-blue-400 py-2 px-20 text-xl"
 const inActiveNav = "hover:bg-blue-300 dark:hover:bg-gray-500  py-2 text-xl px-20"
  return (
    <div className='bg-gray-200 z-10 dark:bg-cyan-950 h-[93vh] w-9/12 sm:w-5/12 md:w-3/12 lg:w-2/12 absolute md:mt-16 md:fixed lg:fixed'>
      <ul className='mt-5 leading-10 text-xl text-black dark:text-cyan-200 font-mono font-bold grid grid-cols-1'>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/">General</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav}  to="/business">Business</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/entertainment">Entertainment</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/health">Health</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/science">Science</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/sports">Sports</NavLink>
        <NavLink className={({ isActive }) => isActive ? activeNav : inActiveNav} to="/technology">Technology</NavLink>
      </ul>

    </div>

  )
}

export default Sidebar
