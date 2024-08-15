import React from 'react'
import colorPallete from '../context/colors'
function Card({icon,title,description, containerStyles, iconStyles}) {
  const theme=colorPallete()
  return (
    <div className="flex flex-col sm:flex-row items-center p-4 lg:p-6 my-4 rounded-lg shadow-lg">
      <div className=" shrink-1 bg-sky-500 lg:w-14 lg:h-14 w-16 h-16 rounded-full flex items-center justify-center mr-8">
    {icon}
      </div>
      <div className="text-center sm:text-left">
        <h3 style={{ color: theme.color}}  className="lg:text-2xl text-xl font-bold text-white mb-2">{title}</h3>
        <p style={{ color: theme.color}}  className="text-white text-md">{description}</p>
      </div>
    </div>
  )
}

export default Card