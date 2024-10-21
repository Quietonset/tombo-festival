import React from 'react';
// import icons
import { GiSparkles } from "react-icons/gi";
// import images
import peopleAtConcert from '/assets/Palm Tombo2.png';
import boleFish from '/assets/Palm Tombo3.png';
import manDrumming from '/assets/pexels-yankrukov-9010079.jpg';
import SunImage from '/assets/SunImage.png'

const Highlights = () => {
  return (
    <div className='flex s:flex-col sm:flex-col md:flex-col lg:flex xl:flex s:pl-[18px] sm:pl-[30px] md:pl-[30px] lg:pl-[50px] xl:pl-[50px] py-10 mb-12 lg:mb-0 gap-y-16 lg:gap-y-0 mt-20 bg-[#f7faf9]'>
      {/* texts */}
      <div className='s:pl-0 sm:pl-0 md:pl-5 lg:p-20 s:w-[95%] sm:w-[95%] md:w-[95%] lg:w-[80%] xl:w-[80%] flex flex-col gap-10'>
        {/* header */}
        <div className='font-bold capitalize text-[27px] lg:text-3xl xl:text-3xl flex flex-col gap-5'>
          <img src={SunImage} alt="Icon" className='h-16 w-16 lg:h-20 md:w-20 object-cover' />
          <h1 className='font-bold'>festival highlights</h1>
        </div>
        {/* mini texts */}
        <div className='flex items-start gap-x-5'>
          <div>
            <GiSparkles className='s:text-xl sm:text-xl md:text-xl lg:text-2xl text-3xl text-[#f29435] mt-1'/>
          </div>
          <div className='s:pr-0 sm:pr-0 md:pr-0 lg:pr-10 xl:pr-10'>
            <h3 className='font-semibold s:text-lg sm:text-lg md:text-xl lg:text-xl xl:text-xl s:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2'>Food & Comedy</h3>
            <p className='s:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base'>Laugh out loud with the region's top comedians while grooving to the best beats. A perfect blend of entertainment and rhythm awaits you!</p>
          </div>
        </div>
        <div className='flex items-start gap-x-5'>
          <div>
            <GiSparkles className='s:text-xl sm:text-xl md:text-xl lg:text-2xl text-3xl text-[#f29435] mt-1'/>
          </div>
          <div className='s:pr-0 sm:pr-0 md:pr-0 lg:pr-10 xl:pr-10'>
            <h3 className='font-semibold text-lg s:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2'>Live Band</h3>
            <p className='s:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base'>Feel the rhythm of the Niger Delta with electrifying performances from local and national bands. Let the music move your soul!</p>
          </div>
        </div>
        <div className='flex items-start gap-x-5'>
          <div>
            <GiSparkles className='s:text-xl sm:text-xl md:text-xl lg:text-2xl text-3xl text-[#f29435] mt-1'/>
          </div>
          <div className='s:pr-0 sm:pr-0 md:pr-0 lg:pr-10 xl:pr-10'>
            <h3 className='font-semibold text-lg s:mb-1 sm:mb-1 md:mb-1 lg:mb-2 xl:mb-2'>Games</h3>
            <p className='s:text-xs sm:text-sm md:text-sm lg:text-base xl:text-base'>Join in the fun with traditional and modern games for all ages. Exciting challenges and prizes guarantee an unforgettable experience!</p>
          </div>
        </div>
      </div>
      {/* images */}
      <div className='w-full s:pl-0 s:pr-5 sm:pl-0 md:pl-0 md:pr-7 lg:pl-7 lg:pr-5 xl:pr-5 xl:pl-7'>
        <div className='grid grid-cols-2 grid-rows-2 gap-3'>
          <img src={peopleAtConcert} alt="People at a Festival" className='rounded-lg' />
          <img src={manDrumming} alt="An image of a man drumming" className='row-span-2 rounded-lg h-[100%] object-cover' />
          <img src={boleFish} alt="An image of Bole" className='rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Highlights;
