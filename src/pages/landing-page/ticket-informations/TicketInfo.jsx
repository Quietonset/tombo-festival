import React, { useState } from 'react';
// import icons
import { HiOutlineSparkles } from 'react-icons/hi2';
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
// import flyer
import flyer from '/assets/tombo-fest-flyer.jpg';

const TicketInfo = () => {
  // state for tickets
  const [isEarlyBird, setIsEarlyBird] = useState(false);
  const [isRegular, setIsRegular] = useState(false);
  const [isVip, setIsVip] = useState(false);
  const [isGoldenHut, setIsGoldenHut] = useState(false);
  const [isExclusiveHut, setIsExclusiveHut] = useState(false);

  return (
    <div>
      {/* header */}
      <div className='font-semibold capitalize text-3xl s:hidden sm:hidden md:flex lg:flex xl:flex flex-col items-center gap-6 my-12'>
        <HiOutlineSparkles className='text-[#f29435] mx-3'/>
        <h1>ticket informations</h1>
      </div>
      {/* body */}
      <div className='flex s:flex-col sm:flex-col md:flex lg:flex xl:flex s:mx-8 sm:mx-8 md:mx-8 lg:mx-20 xl:mx-20 py-2 gap-x-16'>
        {/* events info and map */}
        <div className='w-full flex flex-col s:gap-12 sm:gap-12 md:gap-12 lg:gap-16 xl:gap-16'>
          {/* event info */}
          <div className='flex flex-col s:gap-4 sm:gap-4 md:gap-4 lg:gap-8 xl:gap-8'>
            <h3 className='font-semibold text-lg mb-2'>Event Info</h3>
            <div className='flex gap-3 items-center'>
              <div><CiCalendar className='text-2xl'/></div>
              <p>Saturday, 14th December, 2024</p>
            </div>
            <div className='flex gap-3 items-center'>
              <div><CiClock2 className='text-2xl'/></div>
              <p>1 PM Prompt</p>
            </div>
            <div className='flex gap-3 items-center'>
              <div><CiLocationOn className='text-2xl'/></div>
              <p>Polo Club GRA Phase 2, Port Harcourt</p>
            </div>
          </div>
          {/* map */}
          <div className='flex flex-col gap-5 s:mb-12 sm:mb-12 md:mb-12 lg:mb-0 xl:mb-0'>
            <h3 className='font-semibold text-lg mb-2'>Location On Map</h3>
            <iframe 
            className='w-[100%] s:h-[200px] sm:h-[200px] md:h-[250px] lg:h-[250px] xl:h-[280px] rounded-lg s:ml-0 sm:ml-0 md:ml-0 lg:ml-2 xl:ml-2'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7951.326158152643!2d6.990746784767743!3d4.827788016722936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cf40a3823d37%3A0x143a766549e649b3!2sPort%20Harcourt%20Polo%20Club!5e0!3m2!1sen!2sng!4v1729269955346!5m2!1sen!2sng" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        {/* tickets info */}
        <div className='w-full'>
          <div className='flex flex-col gap-2.5'>
            <h3 className='font-semibold text-lg'>Purchase Ticket</h3>
            <p className='bg-transparent text-black w-full px-5 text-center mb-4 s:h-6 sm:h-6 md:h-2 lg:h-12 xl:h-12 flex justify-center items-center s:text-xs sm:text-xs md:text-sm lg:text-base xl:text-base'>Click on the preferred ticket to save a spot <span className='text-red-600'>*</span></p>
            <div onClick={() => setIsEarlyBird(true)} className='s:border sm:border flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-[10px] rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Early Bird</p>
                <p>₦4,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='s:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] xl:h-[70px] rounded-sm' />
            </div>
            <div onClick={() => setIsRegular(true)} className='s:border sm:border flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-[10px] rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Regular</p>
                <p>₦5,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Regular Ticket" className='s:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] xl:h-[70px] rounded-sm' />
            </div>
            <div onClick={() => setIsVip(true)} className='s:border sm:border flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-[10px] rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>VIP</p>
                <p>₦25,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="VIP Ticket" className='s:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] xl:h-[70px] rounded-sm' />
            </div>
            <div onClick={() => setIsGoldenHut(true)} className='s:border sm:border flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-[10px] rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Golden Hut</p>
                <p>₦200,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Golden Hut Ticket" className='s:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] xl:h-[70px] rounded-sm' />
            </div>
            <div onClick={() => setIsExclusiveHut(true)} className='s:border sm:border flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-[10px] rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Exclusive Hut</p>
                <p>₦500,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Exclusive Hut Ticket" className='s:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[70px] xl:h-[70px] rounded-sm' />
            </div>
          </div>
        </div>
      </div>
      {/* popups */}
      {isEarlyBird && (
        <div onClick={() => setIsEarlyBird(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <div className='bg-[#fcfcfc] flex justify-center items-center s:h-[430px] s:w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:w-[550px] lg:h-[550px] xl:h-[550px] xl:w-[500px] rounded-xl'>
            <div className='flex justify-center items-start flex-col mx-8 h-[90%] gap-2'>
              <img src={flyer} alt="Early Bird Ticket" className='s:h-24 sm:h-24 md:h-28 lg:h-48 xl:h-48 w-full object-cover' />
              <div className='mb-3'>
                <h2 className='font-semibold s:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mt-2'>Early Bird</h2>
                <h4 className='s:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl s:mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-3.5 xl:mb-3.5 mt-1.5'>₦4,000</h4>
                <p className='s:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In neque corrupti quisquam vitae, odit et dolores ipsam ullam commodi mollitia!</p>
              </div>
              <a href="" className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>Get Ticket</a>
              <button onClick={() => setIsEarlyBird(false)} className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>close</button>
            </div>
          </div>
        </div>
      )}
      {isRegular && (
        <div onClick={() => setIsRegular(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <div className='bg-[#fcfcfc] flex justify-center items-center s:h-[430px] s:w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:w-[550px] lg:h-[550px] xl:h-[550px] xl:w-[500px] rounded-xl'>
            <div className='flex justify-center items-start flex-col mx-8 h-[90%] gap-2'>
              <img src={flyer} alt="Regular Ticket" className='s:h-24 sm:h-24 md:h-28 lg:h-48 xl:h-48 w-full object-cover' />
              <div className='mb-3'>
                <h2 className='font-semibold s:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mt-2'>Regular</h2>
                <h4 className='s:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl s:mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-3.5 xl:mb-3.5 mt-1.5'>₦5,000</h4>
                <p className='s:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In neque corrupti quisquam vitae, odit et dolores ipsam ullam commodi mollitia!</p>
              </div>
              <a href="" className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>Get Ticket</a>
              <button onClick={() => setIsRegular(false)} className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>close</button>
            </div>
          </div>
        </div>
      )}
      {isVip && (
        <div onClick={() => setIsVip(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <div className='bg-[#fcfcfc] flex justify-center items-center s:h-[430px] s:w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:w-[550px] lg:h-[550px] xl:h-[550px] xl:w-[500px] rounded-xl'>
            <div className='flex justify-center items-start flex-col mx-8 h-[90%] gap-2'>
              <img src={flyer} alt="VIP Ticket" className='s:h-24 sm:h-24 md:h-28 lg:h-48 xl:h-48 w-full object-cover' />
              <div className='mb-3'>
                <h2 className='font-semibold s:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mt-2'>VIP</h2>
                <h4 className='s:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl s:mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-3.5 xl:mb-3.5 mt-1.5'>₦25,000</h4>
                <p className='s:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In neque corrupti quisquam vitae, odit et dolores ipsam ullam commodi mollitia!</p>
              </div>
              <a href="" className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>Get Ticket</a>
              <button onClick={() => setIsVip(false)} className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>close</button>
            </div>
          </div>
        </div>
      )}
      {isGoldenHut && (
        <div onClick={() => setIsGoldenHut(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <div className='bg-[#fcfcfc] flex justify-center items-center s:h-[430px] s:w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:w-[550px] lg:h-[550px] xl:h-[550px] xl:w-[500px] rounded-xl'>
            <div className='flex justify-center items-start flex-col mx-8 h-[90%] gap-2'>
              <img src={flyer} alt="Golden Hut Ticket" className='s:h-24 sm:h-24 md:h-28 lg:h-48 xl:h-48 w-full object-cover' />
              <div className='mb-3'>
                <h2 className='font-semibold s:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mt-2'>Golden Hut</h2>
                <h4 className='s:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl s:mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-3.5 xl:mb-3.5 mt-1.5'>₦200,000</h4>
                <p className='s:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In neque corrupti quisquam vitae, odit et dolores ipsam ullam commodi mollitia!</p>
              </div>
              <a href="" className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>Get Ticket</a>
              <button onClick={() => setIsGoldenHut(false)} className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>close</button>
            </div>
          </div>
        </div>
      )}
      {isExclusiveHut && (
        <div onClick={() => setIsExclusiveHut(false)} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-30'>
          <div className='bg-[#fcfcfc] flex justify-center items-center s:h-[430px] s:w-[300px] sm:h-[300px] sm:w-[300px] md:h-[450px] md:w-[400px] lg:w-[550px] lg:h-[550px] xl:h-[550px] xl:w-[500px] rounded-xl'>
            <div className='flex justify-center items-start flex-col mx-8 h-[90%] gap-2'>
              <img src={flyer} alt="Exclusive Hut Ticket" className='s:h-24 sm:h-24 md:h-28 lg:h-48 xl:h-48 w-full object-cover' />
              <div className='mb-3'>
                <h2 className='font-semibold s:text-sm sm:text-sm md:text-base lg:text-base xl:text-lg mt-2'>Exclusive Hut</h2>
                <h4 className='s:text-2xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-4xl s:mb-1.5 sm:mb-1.5 md:mb-1.5 lg:mb-3.5 xl:mb-3.5 mt-1.5'>₦500,000</h4>
                <p className='s:text-sm sm:text-sm md:text-sm lg:text-base xl:text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In neque corrupti quisquam vitae, odit et dolores ipsam ullam commodi mollitia!</p>
              </div>
              <a href="" className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>Get Ticket</a>
              <button onClick={() => setIsExclusiveHut(false)} className='bg-[#236e45] text-white w-full rounded-xl capitalize flex items-center justify-center s:py-2 sm:py-2 md:py-2 lg:py-3 xl:py-3'>close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TicketInfo;
