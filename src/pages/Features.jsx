import React from 'react'
import { FaRobot,FaFileInvoice, FaDownload, FaPencilAlt, FaRuler  } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
import { TiSortAlphabetically } from "react-icons/ti";

import colorPallete from '../context/colors';
function Features() {
  const theme= colorPallete()
  return (
    <section id="features" className="mx-auto  justify-center max-w-7xl">
    <section className="mx-auto flex-flex-wrap lg:grid lg:grid-cols-4 flex-wrap justify-center gap-8 p-8 max-w-7xl">
    <div  style={{ backgroundColor: theme.bg2}} className="text-center w-full bg-transparent p-6 rounded-lg my-4 shadow-lg hover:shadow-xl transform hover:scale-105 
    transition duration-300 ease-in-out">
<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4">
<FaRobot color="white" fontSize="32"/>
</div>
<div>
  <h1 style={{color:theme.color}} className="lg:text-3xl text-xl font-bold  mb-4">AI-Powered Writing</h1>
  <p style={{color:theme.color}} className="text-lg ">Generate high-quality content with advanced AI technology</p>
</div>
    </div>
    <div  style={{ backgroundColor: theme.bg2}} className="text-center w-full bg-transparent p-6 rounded-lg my-4
    shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4">
<FaFileInvoice color="white" fontSize="32"/>
</div>
<div>
  <h1 style={{color:theme.color}} className="lg:text-3xl text-xl font-bold mb-4">Custom Genre</h1>
  <p style={{color:theme.color}} className="text-lg ">Create stories in any genre or blend multiple styles</p>
</div>
    </div>
    <div  style={{ backgroundColor: theme.bg2}} className="text-center w-full bg-transparent p-6 rounded-lg my-4
     shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4">
<FaDownload color="white" fontSize="32"/>
</div>
<div>
  <h1 style={{color:theme.color}} className="lg:text-3xl text-xl font-bold  mb-4">Instant Download</h1>
  <p style={{color:theme.color}} className="text-lg ">Get your completed book in various formats instantly"</p>
</div>
    </div>
    <div  style={{ backgroundColor: theme.bg2}} className="text-center w-full bg-transparent p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
<div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-purple-700 mb-4">
<TiSortAlphabetically  color="white" fontSize="32"/>
</div>
<div>
  <h1 style={{color:theme.color}} className="lg:text-3xl text-xl font-bold  mb-4">Multilingual</h1>
  <p style={{color:theme.color}} className="text-lg">GGenerate content in multiple languages effortlessly</p>
</div>
    </div>
      
    </section>
   
    </section>
  )
}

export default Features