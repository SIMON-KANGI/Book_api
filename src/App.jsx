import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Features from './pages/Features'
import How from './pages/How'
import RoadMap from './pages/RoadMap'
import Footer from './pages/footer'
import colorPallete from './context/colors'
import { Routes,Route } from 'react-router-dom'
import Api from './pages/Api'
function App() {
  const theme=colorPallete()
  return (
    <main className='main w-screen  flex flex-col' style={{background:theme.bg,color:theme.color2}}>
    
    
     <Routes>
     <Route path="/" element={<Home/>} />
      <Route path="/api" element={<Api/>}/>
     </Routes>
   
    </main>
  )
}

export default App
