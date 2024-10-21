import React, { useContext, useState } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import logo from '/assets/TomboLogo.png';
// import menu context
import { MenuContext } from '../../context/MenuContext';

const Navbar = () => {
  // getting the menu context
  const {isClicked, setIsClicked, isActive, toggleMenu} = useContext(MenuContext);

  return (
    <nav className='flex justify-between s:px-0 sm:px-0 md:px-[70px] lg:px-[70px] xl:px-[70px] py-5 bg-[#FCFDFC] sticky top-0 z-20'>
      {/* section links */}
      <div className='s:hidden sm:hidden md:flex lg:flex xl:flex gap-x-12 justify-center items-center'>
        <Link to={'/'} className='hover:text-[#236e45]'>Home</Link>
        <Link to={''} className='hover:text-[#236e45]'>About</Link>
        <Link to={''} className='hover:text-[#236e45]'>Highlights</Link>
      </div>
      <div className='s:block sm:block md:hidden lg:hidden xl:hidden'></div>
      {/* logo */}
      <div>
        <img src={logo} alt="Tombo Festival 2024" className='s:h-10 sm:h-12 md:h-20 lg:h-20 xl:h-20 s:ml-16 object-cover'/>
      </div>
      {/* buy ticket */}
      <div className='flex items-center s:hidden sm:hidden md:block lg:block xl:block'>
        <Button content={'Buy Ticket'} link={'/tickets-info'}/>
      </div>
      <div onClick={() => {setIsClicked(!isClicked), toggleMenu()}} className='s:flex sm:flex flex-col justify-center items-center md:hidden lg:hidden xl:hidden cursor-pointer gap-[5px] mr-8'>
        <div className={`h-[3px] w-7 bg-black transition-transform duration-200 rounded-full ${isActive ? 'rotate-45 translate-y-2' : ''}`} />
        <div className={`h-[3px] w-7 bg-black transition-opacity duration-200 rounded-full ${isActive ? 'opacity-0' : 'opacity-100'}`} />
        <div className={`h-[3px] w-7 bg-black transition-transform duration-200 rounded-full ${isActive ? '-rotate-45 -translate-y-2' : ''}`} />
      </div>
    </nav>
  )
}

export default Navbar
