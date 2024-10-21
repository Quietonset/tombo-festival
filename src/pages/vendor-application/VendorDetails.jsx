import React from 'react';
import imageFood from '../../assets/images/pexels-cottonbro-5602502.jpg';
import star from '../../assets/images/SunImage.png'

const VendorDetails = () => {
  return (
    <section className='flex h-screen p-8'>
      <div className='h-full basis-2/4 '>
        <img src={imageFood} alt="cotton-bro" className='h-full w-full rounded-lg ' />
      </div>
      <div className='basis-2/4 p-20'>
        <div className='mb-8' >
          <img src={star} alt="A sun image" />
        </div>
        <h2 className='font-black text-2xl my-8'>
          Become a vendor at Tombo Festival!
        </h2>
        <p className='mb-8'> 
          Showcase your products to thousands of festival-goers! Join us and be a part of an unforgettable cultural experiences while expanding your business at the of the Niger Delta.
        </p>
        <button className='bg-[#236E45] text-white py-4 px-8 rounded-full'>Get Started</button>
      </div>
    </section>
  )
}

export default VendorDetails
