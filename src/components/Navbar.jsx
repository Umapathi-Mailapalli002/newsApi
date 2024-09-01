"use client"
import React, { useState, useEffect } from 'react'
import { HiBars2 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import Sidebar from './Sidebar';
import { useMediaQuery } from 'react-responsive';
import  useBodyScrollLock  from '../hooks/ScrollLockHook';
import { NavLink } from 'react-router-dom';
function Navbar() {

  const [darkTheme, setDarkTheme] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		if (theme === 'dark') {
			setDarkTheme(true);
		} else {
			setDarkTheme(false);
		}
	}, []);

	useEffect(() => {
		if (darkTheme) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [darkTheme]);

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
  }
    const [isOpen, setIsOpen] = useState(false);
    const [isLocked, toggle] = useBodyScrollLock()
    const handleSideBar = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
      if (isOpen) {
        // Lock body scroll when sidebar is open
        if (!isLocked) {
          toggle();
        }
      } else {
        // Unlock body scroll when sidebar is closed
        if (isLocked) {
          toggle();
        }
      }
    }, [isOpen, isLocked, toggle]);
  
    const isSmallScreen = useMediaQuery({maxWidth : 770})
    const navInactiveClass = "hover:text-blue-500 dark:hover:text-gray-500 font-bold text-xl md:text-sm"
    const navActiveClass = "hover:text-blue-700 font-extrabold text-blue-700 dark:hover:text-gray-500  text-xl md:text-sm"
  return (
    <div>
        <div className='bg-orange-300 dark:bg-slate-900 h-16 flex justify-between lg:w-full'>
           {isSmallScreen ? ( <button onClick={handleSideBar} className='ml-3 sm:ml-5 h-16 flex items-center'>
            {!isOpen ? (<HiBars2 className='absolute size-10 text-black dark:text-white'/>) :
            (<RxCross2 className='absolute size-10 text-black dark:text-white'/>)}
            </button>) : (
              <ul className='mt-5 leading-10 text-xl text-black dark:text-cyan-200 font-mono grid grid-flow-col gap-3 lg:gap-10 ml-5'>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/">General</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/business">Business</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/entertainment">Entertainment</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/health">Health</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/science">Science</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/sports">Sports</NavLink>
              <NavLink className={({isActive}) => (isActive ? navActiveClass : navInactiveClass)} to="/technology">Technology</NavLink>
            </ul>
            )}
            {/* enabling dark mode and light mode button */}

            <button onClick={handleChangeTheme} className='lg:absolute md:absolute md:right-0 md:top-3 lg:right-0 lg:top-3'>
            {!darkTheme ? (<MdDarkMode className='aboslute mr-3 sm:mr-8 text-black size-8' />) :
            (<CiLight className='aboslute mr-3 text-white sm:mr-8 size-8'/>)}
            </button>
        </div>
        {(isOpen && isLocked) && (<Sidebar/>)}
    </div>
  )
}

export default Navbar
