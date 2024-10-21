import React from 'react';
import logo from '/assets/TomboLogo.png';

const Footer = () => {
  return (
    <footer>
        <div className='flex s:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row s:justify-center sm:justify-center md:justify-between lg:justify-between xl:justify-between s:px-0 sm:px-0 md:px-16 lg:px-24 xl:px-24 h-[200px]'>
          {/* logo */}
          <div className='s:flex s:justify-center sm:flex sm:justify-center md:block lg:block xl:block'>
            <img src={logo} alt="Tombo Festival 2024" className='h-20 object-cover'/>
          </div>
          {/* social links */}
          <div className='grid grid-cols-4 gap-x-12 s:ml-3 sm:ml-3 md:ml-0 lg:ml-0 xl:ml-0'>
            <a href="" className='hover:text-[#236e45]'>Instagram</a>
            <a href="" className='hover:text-[#236e45]'>Facebook</a>
            <a href="" className='hover:text-[#236e45]'>WhatsApp</a>
            <a href="" className='hover:text-[#236e45]'>Email</a>
          </div>
          </div>
        {/* copyright */}
        <div className='flex justify-center items-center s:text-sm sm:text-sm md:text-base lg:text-base xl:text-base mb-2'>
            <p>&copy;Copyright 2024 Tombo Festival. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
