import React from 'react'
import name from '../assets/name.png'
import playButton from '../assets/playButton.png'
const Left = () => {
  return (
    <div className='p-[100px]'>
      <div id='smline' className='h-[3px] w-14 bg-black'> </div>
      <div className='leftitem h-1 mt-2 text-[2.5rem] font-monst'>Hello, I am 👋 </div>
      <img className='leftitem mt-[4rem]' src={name} alt="" />
        <div className='leftitem text-stone-400 font-monst [word-spacing:20px] tracking-[10px] text-2xl ml-5 mt-4 font-bold'>A designer from <span className='text-sky-700 leftitem'>Ukrain,</span></div>
        <div className='flex items-center mt-7'>
        <img className='w-[6rem] leftitem' src={playButton} alt="" /> <span className='leftitem [word-spacing:12px] tracking-[10px] font-monst ml-3 font-semibold
        '>SEE MY WORK PROFILE</span > 
        </div>
        <div className='mt-64 font monst leftitem'>
            <h4 className='font-medium tracking-[16px]'>Contact Me</h4>
            <h2 className='font-semibold text-sm mt-4'>Email: <span className='font-normal text-[#00E6E8]'>romanempire707@gmail.com</span> </h2>
            <h2 className='font-semibold text-sm'>Contact Number:<span className='font-normal text-[#00E6E8]'>+923164912164</span></h2>
        </div>
        </div>
  )
}

export default Left
