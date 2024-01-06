
import logo from '../assets/logo.png'   

import { MagnifyingGlassIcon,HamburgerMenuIcon } from '@radix-ui/react-icons';
const Nav = () => {
  return (
    <div className=' w-full h-[10%] flex items-center justify-between'>
        <img className='navitem ml-24' src={logo} alt="" />
        <div className='flex items-center  w-60 h-3/5 justify-between mr-24'>
            <a href="#" className='navitem opacity-95 tracking-[.25em] uppercase text-sm'>Home</a>
            <a href="#" className='navitem opacity-30 tracking-[.25em] uppercase text-sm mr-5'>Contact</a>
            <a href="#" className='navitem'><MagnifyingGlassIcon/></a>
            <a href="#"className='navitem'><HamburgerMenuIcon onClick={()=>{
                const bg = document.querySelector('.bg')
                bg.style.transform = 'scale(.8)';
                bg.style.borderRadius = '10px';
                bg.style.boxShadow = '0px 150px 45px -100px rgba(0,0,0,0.2)';
                bg.style.transition = 'all cubic-bezier(0.19,1,0.22,1) 0.5s';
            }} /></a>
        </div>
    </div>  
  )
}

export default Nav
