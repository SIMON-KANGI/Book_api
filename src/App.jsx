import React from 'react'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Features from './pages/Features'
import How from './pages/How'
import RoadMap from './pages/RoadMap'
function App() {
  return (
    <div className='main w-screen  flex flex-col'>
     <NavBar/>
     <Home/>
     <Features/>
     <How/>
     <RoadMap/>
    </div>
  )
}

export default App
