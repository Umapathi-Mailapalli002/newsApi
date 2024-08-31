"use client"
import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';


function Sidebar() {
 const isSmallScreen = useMediaQuery({maxWidth : 770})
  return (
    <div className='bg-gray-200 z-10 dark:bg-cyan-950 h-[93vh] w-9/12 sm:w-5/12 md:w-3/12 lg:w-2/12 absolute md:mt-16 md:fixed lg:fixed'>
      <ul className='mt-5 leading-10 text-xl text-black dark:text-cyan-200 font-mono font-bold '>
        <NavLink to="/"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>General</li></NavLink>
        <NavLink to="/business"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Business</li></NavLink>
        <NavLink to="/entertainment"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Entertainment</li></NavLink>
        <NavLink to="/health"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Health</li></NavLink>
        <NavLink to="/science"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Science</li></NavLink>
        <NavLink to="/sports"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Sports</li></NavLink>
        <NavLink to="/technology"><li className='hover:bg-blue-300 dark:hover:bg-gray-500 pl-[30%] py-2 text-xl'>Technology</li></NavLink>
      </ul>

    </div>

  )
}

export default Sidebar
