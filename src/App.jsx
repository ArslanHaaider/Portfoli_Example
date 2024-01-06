import React from 'react'
import Landing from './components/Landing'
import Loader from './components/Loader'
import Nav from './components/nav'
import { gsap } from "gsap"
import { useEffect } from 'react'
const App = () => {
  useEffect(() => {
    // Select elements using document.querySelector
    const navitem = document.querySelector('.navitem');
    const smline = document.querySelector('#smline');
    const leftitems = document.querySelectorAll('.leftitem');
    const right = document.querySelector('#right');

    // Animation timeline
    let tl = gsap.timeline();

    // Use the selected elements in the GSAP animation
    tl.from(navitem, {
      stagger: 0.3,
      duration: 4,
      y: 20,
      delay: 2,
      ease: 'Expo.easeInOut',
      opacity: 0,
    })
    .from(smline, {
      width: 0,
      duration: 1,
      ease: 'Expo.easeInOut',
    }, '-=2')
    .from(leftitems, {
      stagger: 0.3,
      duration: 2,
      y: 20,
      ease: 'Expo.easeInOut',
      opacity: 0,
    }, '-=2')
    .from(right, {
      duration: 2,
      scale: 1.05,
      ease: 'Expo.easeInOut',
      opacity: 0,
    }, '-=2');
  }, []);
  return (

    <div className='bg h-screen bg-white '>
      <Nav/>
    <Landing/>
    </div>   
  
  )
}

export default App
