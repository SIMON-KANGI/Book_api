import React from 'react';
import colorPallete from '../context/colors';
import Features from './Features';
import How from './How';
import RoadMap from './RoadMap';
import NavBar from '../components/NavBar';
import Footer from './footer';
function Home() {
  const theme=colorPallete()
  return (
    <section>
    <NavBar/>
        <div id="home" className='my-8'>
      <h1 className='text-gray-100 lg:text-5xl text-3xl text-center font-bold' style={{ color: theme.color}}>
        Explore the Possibilities of{' '}
        <span className=' border-violet-400 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-violet-800'>
          AI Book Writing
        </span>{' '}
        with <br />
        BookAI
      </h1>
      <div className='my-8'>
        <p style={{ color: theme.color2}} className='text-xl text-stone-300 text-center'>Unleash the power of AI to create captivating books in minutes.</p>
        <p style={{ color: theme.color2}} className='text-xl text-stone-300 text-center'>Download, Distribute wherever you want. Generate unlimited free <br/>books</p>
      </div>
      <div className='justify-center items-center my-8  flex'>
        <button style={{ color: theme.color}} className='bg-gradient-to-r from-blue-500 to-blue-300 px-8 py-3 mx-2 rounded-full text-xl text-white font-bold items-center'>Get Started</button>
        <button style={{ color: theme.color}}   className='bg-gradient-to-r from-blue-500 to-blue-300 px-8 py-3 rounded-full text-xl text-white font-bold  items-center'>Get Api Access</button>
      </div>
      <h1 className='text-amber-500 py-16 text-center'>Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</h1>
      <div className=' book2 py-8 px-6  relative rounded-md w-3/5 h-fit   mx-auto '>
         <div className="w-100 h-100 ">
         <img src="book2.png" alt="book2" className='rounded-lg transition-transform transform hover:scale-105' /></div>
         <div className='paradox top-6 absolute bg-slate-300 py-2 pl-10 pr-2 rounded-lg transition-transform transform hover:scale-105'>
    <img src="paradox.png" alt="paradox" className='w-24 rounded-lg h-32' />
</div>
<div className='paradox absolute right-4 flex bottom-4 px-7 py-3 rounded-lg items-center'>
  <button className='bg-sky-500 w-8 h-8 rounded-full'></button>
  <h1 className='text-white font-bold text-xl bottom-16 ml-2'>Chapter Complete</h1>
</div>

      </div>
     
    </div>
   <div id="features">
     <Features/>
   </div>
    <div id="how">
       <How/>
    </div>
    <div id="road">
       <RoadMap/>
    </div>
    <Footer/>
    </section>
  
  );
}

export default Home;
