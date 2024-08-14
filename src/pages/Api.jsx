import React from 'react'
import Price from './Price'
import colorPallete from '../context/colors'
function Api() {
  const theme=colorPallete()
  return (
    <section style={{backgroundColor:theme.bg3}}>
    <div className='py-16 bg-indigo-500'>
      <h1 className='text-center text-5xl font-extrabold text-white'>Book Generator API</h1>
    </div>
    <Price/>
      
    </section>
  )
}

export default Api
