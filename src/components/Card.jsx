import React from 'react'

function Card({icon,title,description, containerStyles, iconStyles}) {
  return (
    <div className={containerStyles}>
      <div className={iconStyles}>
    {icon}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white text-md">{description}</p>
      </div>
    </div>
  )
}

export default Card
