import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, UpdateTheme } from '../context/themeContext'; // Ensure both hooks are imported
import { MdDarkMode, MdLightMode } from "react-icons/md";
import colorPallete from '../context/colors';
import SideBar from './SideBar';

function NavBar() {
  const darkTheme = useTheme();  // Accessing the theme state
  const toggleTheme = UpdateTheme();  // Function to toggle theme
  const theme = colorPallete();  // Assuming this returns a color object

  return (
    <header className='flex items-center justify-between lg:justify-around w-full px-6 py-4'>
      <div className='flex items-center'>
        <img src="logo.png" alt="logo" className='w-12 h-12 rounded-full lg:w-16 lg:h-16' />
        <h1 className='text-2xl lg:text-3xl font-bold ml-4' style={{ color: theme.color }}>BookAI</h1>
      </div>
      
      <nav className='hidden lg:flex'>
        <ul className='flex space-x-6 items-center'>
          <li><a href="#features" className='text-lg hover:text-blue-500' style={{ color: theme.color }}>Features</a></li>
          <li><a href="#how" className='hover:text-blue-500' style={{ color: theme.color }}>How it Works</a></li>
          <li><a href="#road" className='hover:text-blue-500' style={{ color: theme.color }}>Roadmap</a></li>
          <li><a href="/api" className='hover:text-blue-500' style={{ color: theme.color }}>Api</a></li>
          <li><a href="/api/#price" className='hover:text-blue-500' style={{ color: theme.color }}>Price</a></li>
          <li><a href="/api" className='hover:text-blue-500' style={{ color: theme.color }}>Models</a></li>
          <li className='text-xl'>
            <button onClick={toggleTheme} className='flex items-center' style={{ color: theme.color }}>
              {darkTheme ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
          <li>
            <button className='bg-gradient-to-r from-blue-500 to-blue-300 px-6 py-2 lg:px-10 lg:py-4 text-lg lg:text-xl text-white rounded-lg hover:bg-blue-600'>
              Login/Sign Up
            </button>
          </li>
        </ul>
      </nav>

      {/* SideBar for small screens */}
      <div className="lg:hidden">
        <SideBar />
      </div>
    </header>
  );
}

export default NavBar;
