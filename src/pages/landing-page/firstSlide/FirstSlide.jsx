import React, { forwardRef } from 'react'
import React from 'react';
import PalmTombo1 from '/assets/Palm Tombo1.png';
import Button from '../../../components/Button';
import Frame from '/assets/Frame.png';
import CountDown from './Countdown';
import CokeLogo from '/assets/CokeLogo.png';
import McDonLogo from '/assets/McDonLogo.png';
import KFCLogo from '/assets/KFCLogo.png';
import ShopriteLogo from '/assets/ShopriteLogo.png';
import PaystackLogo from '/assets/PaystackLogo.png';
import BudweiserLogo from '/assets/BudweiserLogo.png';
import RedBullLogo from '/assets/RedBullLogo.png';



const FirstSlide = () => {
  return (
    // First slide contains hero section and sponsors section
    <div id='hero'>
        <section className='flex s:flex-col sm:flex-col md:flex-col px-[120px] s:px-6 sm:px-6 md:px-10 lg:px-[50px] justify-between gap-10 s:gap-5 sm:gap-5 s:justify-center '>
            {/* Text, button and countdown */}
        <div className=''>

          {/* Header text */}
          <div>
            <h1 className='font-extrabold text-5xl s:text-3xl s:mb-3 bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent leading-normal'>Celeberate the Spirit of Tombo Festival</h1>
          </div>
          {/* Paragraph */}
          <div className='w-[650px s:w-full h-[64px] s:h-full text-[20px] s:text-sm text-[#301D0B] '>
            <p>Join us for a cultural experience in the heart of the Niger Delta. A vibrant fusion of music, dance and tradition</p>
          </div>

          {/* Buy ticket and Be a vendor Buttons */}
          <div className='flex gap-[28px] s:gap-0 my-5'>
            <Link to='buyTicket' smooth={true} offset={-150}>
            <Button content={'Buy Ticket'} BtnStyle={'text-sm'} />
            </Link>
            <Button content={'Be a Vendor '} link={'/register-to-be-a-vendor'} BtnStyle={'bg-white text-green-600 shadow text-sm s:text-xs w-[160px] space-x-2 s:space-x-1'} image={Frame}/>
          </div>

          {/* Count Down */}
          <div className='flex w-full justify-center'>
          <CountDown />
          </div>
        </div>

        {/* PalmTombo Image */}
        <div className='flex s:w-full s:aspect-square '>
            <img className='object-cover' src={PalmTombo1} alt="" />
        </div>

        </section>

        {/* Sponsors section */}
       <section className='flex flex-col px-[120px] s:px-5 my-[100px] gap-10'>
       <div className='text-center font-bold'>
            <h1>Sponsored By</h1>
        </div>
        <div className='grid grid-cols-7 s:grid-cols-4 s:grid-rows-2 items-center justify-items-center gap-2 s:gap-2 sm:gap-3 object-cover aspect-auto'>
            <img src={CokeLogo} alt="" />
            <img src={McDonLogo} alt="" />           
            <img src={ShopriteLogo} alt="" />      
            <img src={PaystackLogo} alt="" />
            <img src={RedBullLogo} alt="" />
            <img src={KFCLogo} alt="" />
            <img src={BudweiserLogo} alt="" />
        </div>
       </section>
    </div>
  )
}

export default  FirstSlide
