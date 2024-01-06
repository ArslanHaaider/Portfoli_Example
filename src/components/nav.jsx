import React from 'react'
import logo from '../assets/logo.png'   
import { Link, NavLink } from 'react-router-dom';
import { MagnifyingGlassIcon,HamburgerMenuIcon } from '@radix-ui/react-icons';
const Nav = () => {
  return (
    <div className='border-orange-600 border-2 border-solid w-full h-24 flex items-center justify-between'>
        <img className='ml-24' src={logo} alt="" />
        <div className='flex items-center  w-60 h-3/5 justify-between mr-24'>
            <a href="#" className='opacity-95 tracking-[.25em] uppercase text-sm'>Home</a>
            <a href="#" className='opacity-30 tracking-[.25em] uppercase text-sm mr-5'>Contact</a>
            <a href="#"><MagnifyingGlassIcon/></a>
            <a href="#"><HamburgerMenuIcon/></a>
        </div>
    </div>  
  )
}

export default Nav
