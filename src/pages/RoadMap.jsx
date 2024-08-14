import React from 'react'
import Card from '../components/Card'
import { FaPaintBrush   } from "react-icons/fa";
import { MdSettingsSuggest, MdDownloadForOffline, MdOutlineLaptopChromebook } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";
import { RiTeamFill } from "react-icons/ri";
function RoadMap() {
  return (
    <section className='max-w-7xl mx-auto'>
    <section className='how my-4 p-8 max-w-7xl mx-auto'>
    <h1 className='text-center text-2xl font-bold text-white p-6'>RoadMap </h1>
    
    <div className='flex flex-wrap  my-8 '>
          <Card
        icon={<IoPersonCircleSharp color="white" fontSize="32"/>}
        title="Advanced Character Development"
        description="AI-powered tool for creating deep, complex characters"
        containerStyles="flex items-center mx-4 lg:my-0 my-8"
         iconStyles="bg-sky-500 w-14 h-14 rounded-full flex items-center justify-center mx-6"
    />
     <Card
        icon={<MdOutlineLaptopChromebook color="white" fontSize="32"/>}
        title="Provide Key details"
        description="E-book Platform Integration"
        containerStyles="flex items-center"
         iconStyles="bg-sky-500 w-14 h-14 rounded-full flex items-center justify-center mx-6"
    />
    </div>
       
    
    <div className='flex flex-wrap justify-around my-16 '>
         <Card
        icon={<RiTeamFill color="white" fontSize="32"/>}
        title="Collaborative Writing"
        description="Co-create stories with other authors or AI assistants"
        containerStyles="flex items-center mx-4 lg:my-0 my-8"
         iconStyles="bg-sky-500 w-14 h-14 rounded-full flex items-center justify-center mx-4"
    />
     <Card
        icon={<FaPaintBrush color="white" fontSize="32"/>}
        title="AI Cover Art Generation"
        description="Create stunning book covers with AI-generated art."
        containerStyles="flex items-center mx-4"
         iconStyles="bg-sky-500 w-14 h-14 rounded-full flex items-center justify-center mx-8"
    />
    </div>
    </section>  
    <section className='my-16'>
        <h1 className='text-center text-2xl font-bold text-stone-100'>What users say</h1>
        <div className='flex lg:grid grid-cols-2 my-16'>
            <div className='how rounded-md mx-4 py-8 px-10'>
                <p className='text-stone-100 text-center  text-xl text-wrap'>
                "BookAI revolutionized my writing process.I completed my <br/>debut  novel in just two weeks!"
                </p>
                <h2 className='font-bold text-xl text-white text-center'>-Sarah J., Author</h2>
            </div>
            <div className='how rounded-md mx-4 py-8 px-10'>
                <p className='text-stone-100 text-center  text-xl text-wrap'>
                "The AI-generated ideas helped me overcome writer's block. It's like 
                having a co-author at your fingertips"
                </p>
                <h2 className='font-bold text-xl text-white text-center'>-Mark The., Aspiring Writer</h2>
            </div>
        </div>
    </section>  
    <section className='how p-8 mb-16'>
        <h1 className='text-center text-2xl font-bold text-stone-100'>Stay Updated</h1>
        <p className='text-center text-xl mt-12 text-stone-100'>Subscribe to our newsletter for the latest AI writing 
        tips and BookAI updates</p>
        <div className='my-8'>
            <input type="email" placeholder="Enter your email" className=' bg-stone-100 items-center text-gray-500 py-2 rounded-l-md pl-3 w-96'/>
            <button className='bg-gradient-to-r from-blue-500 to-blue-300 px-8 w-full mt-3 py-2 rounded-md text-white font-bold'>Subscribe</button>
        </div>
    </section> 
    <hr className='text-stone-700'/>
    </section>
  )
}

export default RoadMap
