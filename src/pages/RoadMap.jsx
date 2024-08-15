import React from 'react'
import Card from '../components/Card'
import { FaPaintBrush   } from "react-icons/fa";
import { MdSettingsSuggest, MdDownloadForOffline, MdOutlineLaptopChromebook } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
import colorPallete from '../context/colors';
function RoadMap() {
    const theme=colorPallete()
  return (
    <section className='max-w-7xl mx-auto'>
    <section style={{ backgroundColor: theme.bg2}} className='shadow-lg my-4 p-8 max-w-7xl lg:mx-auto mx-8 rounded-lg'>
    <h1 style={{ color: theme.color}}  className='text-center text-2xl font-bold text-white p-6'>RoadMap </h1>
    
    <div className='flex flex-wrap lg:grid lg:grid-cols-2  lg:my-8 '>
          <Card
        icon={<IoPersonCircleSharp color="white" fontSize="32"/>}
        title="Advanced Character Development"
        description="AI-powered tool for creating deep, complex characters"
       
    />
     <Card
        icon={<MdOutlineLaptopChromebook color="white" fontSize="32"/>}
        title="Provide Key details"
        description="E-book Platform Integration"
       
    />
    </div>
       
    
    <div className='flex flex-wrap lg:grid lg:grid-cols-2 lg:justify-around lg:my-16 '>
         <Card
        icon={<RiTeamFill color="white" fontSize="32"/>}
        title="Collaborative Writing"
        description="Co-create stories with other authors or AI assistants"
       
    />
     <Card
        icon={<FaPaintBrush color="white" fontSize="32"/>}
        title="AI Cover Art Generation"
        description="Create stunning book covers with AI-generated art."
        
    />
    </div>
    </section>  
    <section className='my-16'>
        <h1 style={{ color: theme.color}}  className='text-center text-2xl font-bold text-stone-100'>What users say</h1>
        <div className='flex flex-wrap lg:grid grid-cols-2 my-16 lg:mx-0 mx-6'>
            <div style={{ backgroundColor: theme.bg2}} className='shadow-lg rounded-md my-4 mx-4 py-8 px-10'>
                <p style={{ color: theme.color}} className='text-stone-100 text-center  lg:text-xl text-lg text-wrap'>
                "BookAI revolutionized my writing process.I completed my <br/>debut  novel in just two weeks!"
                </p>
                <h2 style={{ color: theme.color}} className='font-bold text-xl text-white text-center'>-Sarah J., Author</h2>
            </div>
            <div style={{ backgroundColor: theme.bg2}} className='shadow-lg rounded-md my-4 mx-4 py-8 px-10'>
                <p style={{ color: theme.color}} className='text-stone-100 text-center  lg:text-xl text-lg text-wrap'>
                "The AI-generated ideas helped me overcome writer's block. It's like 
                having a co-author at your fingertips"
                </p>
                <h2 style={{ color: theme.color}} className='font-bold text-xl text-white text-center'>-Mark The., Aspiring Writer</h2>
            </div>
        </div>
    </section>  
    <section style={{ backgroundColor: theme.bg2}} className='shadow-lg p-8 lg:mx-0  mx-6 mb-16'>
        <h1 style={{ color: theme.color}} className='text-center text-2xl font-bold text-stone-100'>Stay Updated</h1>
        <p style={{ color: theme.color}} className='text-center text-xl mt-12 text-stone-100'>Subscribe to our newsletter for the latest AI writing 
        tips and BookAI updates</p>
        <div className='my-8'>
            <input style={{ color: theme.color}} type="email" placeholder="Enter your email" className=' bg-stone-100 items-center text-gray-500 py-2 rounded-l-md pl-3 w-96'/>
            <button style={{ color: theme.color}} className='bg-gradient-to-r from-blue-500 to-blue-300 px-8 w-full mt-3 py-2 rounded-md text-white font-bold'>Subscribe</button>
        </div>
    </section> 
    <hr className='my-8 border-0 h-1 bg-stone-600 rounded-full' />

    </section>
  )
}

export default RoadMap
