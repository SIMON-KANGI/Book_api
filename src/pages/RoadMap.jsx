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
    <section>
        <h1 className='text-center text-2xl font-bold text-stone-100'>What users say</h1>
    </section>   
    </section>
  )
}

export default RoadMap
