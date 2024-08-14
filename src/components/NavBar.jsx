import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, UpdateTheme } from '../context/themeContext'; // Ensure both hooks are imported
import { MdDarkMode, MdLightMode } from "react-icons/md";
import colorPallete from '../context/colors';

function NavBar() {
  const darkTheme = useTheme();  // Accessing the theme state
  const toggleTheme = UpdateTheme();  // Function to toggle theme
  const theme = colorPallete();  // Assuming this returns a color object

  return (
    <header className='flex items-center justify-around w-full my-12 px-6 py-4 bg-transparent'>
      <div className='flex items-center'>
        <img src="logo.png" alt="logo" className='w-16 h-16 rounded-full' />
        <h1 className='text-3xl text-gray-100 font-bold ml-4' style={{ color: theme.color }}>BookAI</h1>
      </div>
      <nav>
        <ul className='flex space-x-6 items-center'>
          <li><a href="#features" className='text-gray-100 text-lg hover:text-blue-500' style={{ color: theme.color }}>Features</a></li>
          <li><a href="#how" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color }}>How it Works</a></li>
          <li><a href="#road" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color }}>Roadmap</a></li>
          <li><a href="/api" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color }}>Api</a></li>
          <li><a href="/api/#price" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color }}>Price</a></li>
          <li><a href="/api" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color }}>Models</a></li>
          <li className='text-gray-100 text-xl'>
            <button onClick={toggleTheme} className='items-center flex' style={{ color: theme.color }}>
              {darkTheme ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
          <li>
            <button className='bg-gradient-to-r from-blue-500 to-blue-300 px-10 py-4 text-xl text-white rounded-lg hover:bg-blue-600'>
              Login/Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
