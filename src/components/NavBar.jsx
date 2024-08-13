import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <header className='flex items-center justify-around w-full my-12 px-6 py-4 bg-transparent'>
      <div className='flex items-center'>
        <img src="logo.png" alt="logo" className='w-16 h-16 rounded-full' />
        <h1 className='text-3xl text-gray-100 font-bold ml-4'>BookAI</h1>
      </div>
      <nav>
        <ul className='flex space-x-6 items-center'>
          <li><Link to="#features" className='text-gray-100 text-lg hover:text-blue-500'>Features</Link></li>
          <li><Link to="/how" className='text-gray-100 hover:text-blue-500'>How it Works</Link></li>
          <li><Link to="/road" className='text-gray-100 hover:text-blue-500'>Roadmap</Link></li>
          <li><Link to="/api" className='text-gray-100 hover:text-blue-500'>Api</Link></li>
          <li><Link to="/price" className='text-gray-100 hover:text-blue-500'>Price</Link></li>
          <li><Link to="/models" className='text-gray-100 hover:text-blue-500'>Models</Link></li>
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
