import React from 'react'
import { FaRobot,FaFileInvoice, FaDownload, FaPencilAlt, FaRuler  } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { TiSortAlphabetically } from "react-icons/ti";
import Card from '../components/Card';
function Features() {
  return (
    <section id="features" className="mx-auto  justify-center max-w-7xl">
    <section className="mx-auto flex-flex-wrap lg:grid lg:grid-cols-4 flex-wrap justify-center gap-8 p-8 max-w-7xl">
       <Card
        icon={<FaRobot color="white" fontSize="32"/>}
        title="AI-Powered Writing"
        description="Generate high-quality content with advanced AI technology"
        containerStyles="text-center w-full bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
        iconStyles="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4"
        
     />
       <Card
        icon={<FaFileInvoice color="white" fontSize="32"/>}
        title="Custom Genre"
        description="Create stories in any genre or blend multiple styles"
         iconStyles="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4"
        containerStyles="text-center w-full bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
     />
       <Card
        icon={<FaDownload color="white" fontSize="32"/>}
        title="AI-Powered Writing"
        description="Get your completed book in various formats instantly"
         iconStyles="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4"
        containerStyles="text-center w-full bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
     />
       <Card
        icon={<TiSortAlphabetically color="white" fontSize="32"/>}
        title="Multilingual"
        description="Generate content in multiple languages effortlessly"
         iconStyles="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4"
        containerStyles="text-center w-full bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
     />  
    </section>
   
    </section>
  )
}

export default Features
