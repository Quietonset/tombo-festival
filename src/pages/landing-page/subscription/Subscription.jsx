import React from 'react'
import { HiOutlineSparkles } from "react-icons/hi2";

function Subscription() {
  return (
    <div className="h-[100dvh] flex flex-col items-center justify-center max-sm:w-[100%]  bg-green-50">
      <div className="p-5">
        <HiOutlineSparkles className="text-[#f29435] mx-3" />
      </div>
      <div className="text-xl font-semibold">Stay Updated!</div>
      <p className="py-8 text-xs">
        Subscribe to get the latest updates on Tombo Festival.
      </p>
      <form className="rounded-full bg-white px-2 py-2 flex justify-between w-fit">
        <input className="text-black" placeholder="Enter Mail" type="text" />
        <button className="bg-green-900 p-3 px-8 rounded-3xl text-white text-sm">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Subscription