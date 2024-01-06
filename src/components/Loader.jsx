import React from 'react'
import name from '../assets/name.png'
const Loader = () => {
  return (
    <div className='w-[100%] h-[100%] bg-white z-40 absolute flex items-center justify-center animate-anim4'>
      <div className='w-[25%] h-[10%] overflow-hidden'>
        <div className='animate-anim w-[100%] h-full flex items-center justify-center font-monst'>
            <img className='w-[40%]' src={name} alt="" />
        </div>
        <div className='animate-anim2 w-[100%] h-full flex items-center justify-center font-monst'>
            MERN STACK DEVELOPER
        </div>
        <div className='animate-anim3  w-[100%] h-full flex items-center justify-center font-monst'>
            LOVES TO HELP THE BRANDS
        </div>
        <div className='w-[100%] h-full flex items-center justify-center font-monst'>
            <img className='w-[40%]' src={name} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Loader
