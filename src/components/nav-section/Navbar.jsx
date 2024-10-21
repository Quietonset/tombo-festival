import React, { useContext, useState } from 'react';
import Button from '../Button';
import { Link } from 'react-scroll';
import Logo from './Logo';
// import menu context
import { MenuContext } from '../../context/MenuContext';

const Navbar = () => {
  // getting the menu context
  const {isClicked, setIsClicked, isActive, toggleMenu} = useContext(MenuContext);
  
  return (
    <nav className='flex justify-between s:px-0 sm:px-0 md:px-[70px] lg:px-[70px] xl:px-[70px] py-5 bg-[#FCFDFC] sticky top-0 z-20'>
      {/* section links */}
      <div className='flex gap-x-12 justify-center items-center'>
        <Link to='hero' smooth={true} offset={-150} className='hover:text-[#236e45] hover:cursor-pointer'>Home</Link>
        <Link to='about' smooth={true} offset={-100}  className='hover:text-[#236e45] hover:cursor-pointer'>About</Link>
        <Link to='highlight' smooth={true} offset={-100} className='hover:text-[#236e45] hover:cursor-pointer'>Highlights</Link>
      </div>
        <div className='s:block sm:block md:block lg:hidden xl:hidden'></div>
      {/* logo */}
      <div >
        <Logo />
      </div>
      {/* buy ticket */}
      <Link to='buyTicket' smooth={true} offset={-150} className='flex items-center'>
        <Button content={'Buy Ticket'} />
      </Link>
      <div onClick={() => {setIsClicked(!isClicked), toggleMenu()}} className='s:flex sm:flex md:flex flex-col justify-center items-center lg:hidden xl:hidden cursor-pointer gap-[5px] mr-8'>
        <div className={`h-[3px] w-7 bg-black transition-transform duration-200 rounded-full ${isActive ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`h-[3px] w-7 bg-black transition-opacity duration-200 rounded-full ${isActive ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`h-[3px] w-7 bg-black transition-transform duration-200 rounded-full ${isActive ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </nav>
  )
}

export default Navbar
