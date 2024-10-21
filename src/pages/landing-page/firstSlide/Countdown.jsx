import React, { useEffect, useState } from 'react'

const CountDown = () => {
    const [timeLeft, setTimeLeft] = useState(31 * 24 * 60 * 60); 

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds
 = timeLeft % 60;

  return (
    <div className=''> 

      <div className='flex gap-[2rem] s:gap-[1em] sm:gap-4 s:text-xs text-[#503112]'>
        <span className='bg-gradient-to-b from-white to-gray-200 rounded-xl font-bold s:font-thin s:p-7 w-[100px] s:w-[56px] lg:w-[80px] h-[100px] s:h-[56px] lg:h-[80px] border flex flex-col justify-center items-center'> <p>{days}</p>
        <p>Days</p> </span>
        <span className='bg-gradient-to-b from-white to-gray-200 rounded-xl font-bold s:font-thin s:p-7 w-[100px] s:w-[56px] lg:w-[80px] h-[100px] s:h-[56px] lg:h-[80px] border flex flex-col justify-center items-center'> <p>{hours}</p>
        <p>Hours</p> </span>
        <span className='bg-gradient-to-b from-white to-gray-200 rounded-xl font-bold s:font-thin s:p-7 w-[100px] s:w-[56px] lg:w-[80px] h-[100px] s:h-[56px] lg:h-[80px] border flex flex-col justify-center items-center'> <p>{minutes}</p>
        <p>Minutes</p></span>
        <span className='bg-gradient-to-b from-white to-gray-200 rounded-xl font-bold s:font-thin s:p-7 w-[100px] s:w-[56px] lg:w-[80px] h-[100px] s:h-[56px] lg:h-[80px] border flex flex-col justify-center items-center'> <p>{seconds}</p>
        <p></p> secs</span>  
        <span className='bg-gradient-to-b from-white to-gray-200 rounded-xl font-bold s:font-thin s:p-7 w-[100px] s:w-[56px] lg:w-[80px] h-[100px] s:h-[56px] lg:h-[80px] border flex justify-center items-center'> Left</span>  
      </div>
    </div>
  );
  }

export default CountDown
