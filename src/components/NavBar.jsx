import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/themeContext';
import { MdDarkMode, MdLightMode  } from "react-icons/md";
import { UpdateTheme } from '../context/themeContext';
import colorPallete from '../context/colors';
function NavBar() {
  const { darkTheme} = useTheme();
  const theme=colorPallete()
  const toggleTheme=UpdateTheme()
  return (
    <header className='flex items-center justify-around w-full my-12 px-6 py-4 bg-transparent'>
      <div className='flex items-center'>
        <img src="logo.png" alt="logo" className='w-16 h-16 rounded-full' />
        <h1 className='text-3xl text-gray-100 font-bold ml-4' style={{ color: theme.color}}>BookAI</h1>
      </div>
      <nav>
        <ul className='flex space-x-6 items-center'>
          <li><Link to="#features" className='text-graay-100 text-lg hover:text-blue-500' style={{ color: theme.color}}>Features</Link></li>
          <li><Link to="/how" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color}}>How it Works</Link></li>
          <li><Link to="/road" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color}}>Roadmap</Link></li>
          <li><Link to="/api" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color}}>Api</Link></li>
          <li><Link to="/price" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color}}>Price</Link></li>
          <li><Link to="/models" className='text-gray-100 hover:text-blue-500' style={{ color: theme.color}}>Models</Link></li>
          <li className='text-gray-100 text-xl'>
          <button onClick={toggleTheme} style={{ color: theme.color}}> 
          {darkTheme?<MdDarkMode />:<MdLightMode/>}

          </button>
         
          </li>
          <li>
            <button className=' bg-gradient-to-r from-blue-500 to-blue-300 px-10 py-4  text-xl text-white rounded-lg hover:bg-blue-600'>
              Login/Sign Up
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
