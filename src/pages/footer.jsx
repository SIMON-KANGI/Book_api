import React from 'react'
import colorPallete from '../context/colors'
function Footer() {
  const theme= colorPallete()
  return (
    <div className='my-8'>
      <h1 style={{ color: theme.color}}  className='text-center font-bold text-xl text-stone-100'>&copy;2024 BookAI. All rights reserved</h1>
      <h2 style={{ color: theme.color2}} className='text-xl text-stone-400 font-bold text-center'>
  Terms of Service&nbsp;&nbsp;Privacy Policy&nbsp;&nbsp;Contact Us
</h2>

    </div>
  )
}

export default Footer
