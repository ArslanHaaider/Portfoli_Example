import React from 'react'
import Landing from './components/Landing'
import Nav from './components/nav'

const App = () => {
  return (
    // <div className='bg-slate-500 w-full h-screen'>
    //   Hello! Tailwind is working for me!
    // </div>
    <div className='bg h-screen bg-white '>
      <Nav/>
    <Landing/>
    </div>
        
  
  )
}

export default App
