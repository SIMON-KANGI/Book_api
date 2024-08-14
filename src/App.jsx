import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Features from './pages/Features'
import How from './pages/How'
import RoadMap from './pages/RoadMap'
import Footer from './pages/footer'
import colorPallete from './context/colors'
function App() {
  const theme=colorPallete()
  return (
    <div className='main w-screen  flex flex-col' style={{background:theme.bg,color:theme.color2}}>
     <NavBar/>
     <Home/>
     <Features/>
     <How/>
     <RoadMap/>
     
     <Footer/>
    </div>
  )
}

export default App
