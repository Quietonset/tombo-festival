import React from 'react'
import Polygon1 from '/assets/Polygon 1.png';
import Polygon2 from '/assets/Polygon 2.png';
import Logo from '/assets/TomboLogo.png';
import Sparkle from '/assets/Sparkle.png';
import SunImage from '/assets/SunImage.png';

const SecondSlide = () => {
  return (
    <div>
      <section className='flex s:flex-col px-[120px] s:px-5 py-10 bg-[#F9FBFA] -z-20'>
        {/* content */}
        <div className='space-y-5'>
            <img src={SunImage} alt="" />
            <div className='font-bold text-[24px]'>Our Story</div>
            <div className='flex flex-col gap-5 text-sm pr-16 s:pr-0  '>
                <p>Tombo Festival is an annual celebration that brings the vibrant culture of the Niger Delta to life. the festival is a unique opportunity to experience the rich heritage, live music, comedy, traditional games, and culinary delights that define the spirit of the region.</p>

                <p>At the core of the Tombo Festival is a celebration of community, connection, and culture. Whether you're swaying to the beats of local live bands, sharing a laugh with the region’s top comedians, or competing in traditional games, the festival offers something for everyone.</p>

                <p>We invite you to come and immerse yourself in this cultural celebration. Enjoy the best of local flavors, shop from unique vendors, and make unforgettable memories with family and friends. Whether you're a first-time visitor or a long-time attendee, the Tombo Festival is a celebration like no other.</p>

                <p>Join us and be part of this incredible journey that celebrates the spirit of the Niger Delta!</p>
            </div>
        </div>
        {/* Image */}
        <div className='w-full relative'>
            <img className='absolute' src={Sparkle} alt="" />
            <div className='text-9xl relative h-full mt-5 '>
                <img className='absolute w-[97%] h-[90%]' src={Polygon1} alt="" />
                <img className='w-[100%] h-[90%] -z-20' src={Polygon2} alt="" />
                <img className='absolute top-[70px] right-[100px]' src={Logo} alt="" />
            </div>
            <img className='absolute right-0 bottom-0' src={Sparkle} alt="" />            
        </div>
      </section>
    </div>
  )
}

export default SecondSlide
