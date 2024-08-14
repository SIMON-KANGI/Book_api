import React from 'react'
import colorPallete from '../context/colors'
function Card({icon,title,description, containerStyles, iconStyles}) {
  const theme=colorPallete()
  return (
    <div className={containerStyles}>
      <div className={iconStyles}>
    {icon}
      </div>
      <div>
        <h3 style={{ color: theme.color}}  className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p style={{ color: theme.color}}  className="text-white text-md">{description}</p>
      </div>
    </div>
  )
}

export default Card
