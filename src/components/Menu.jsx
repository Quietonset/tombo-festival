import React, { useContext } from 'react';
// import menu context
import { MenuContext } from '../context/MenuContext';
// import link
import { Link } from 'react-scroll';
// import icons
import { CiHome, CiCircleQuestion, CiShop, CiTwitter,  } from "react-icons/ci";
import { HiSparkles, HiOutlineNewspaper } from "react-icons/hi2";
import { FcHome, FcAbout, FcShop, FcFeedback, FcFilm, FcCloth, FcInfo, FcIphone } from "react-icons/fc";

const Menu = () => {
    // menu context
    const { isClicked, handleMenuClose } = useContext(MenuContext);

    return (
    <div>
        {isClicked && (
            <div onClick={() => handleMenuClose()} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                <section className={`${isClicked ? 'translate-x-0' : 'translate-x-[-100%]'} h-screen s:w-[75%] sm:w-[75%] md:w-[75%] lg:w-[300px] xl:max-w-[300px] fixed top-24 right-0 bg-[#f7faf9] z-30 transition-all duration-200 transform shadow-2xl`}>
                    <div className='ml-[20px] mt-[40px]'>
                        <ul className='flex flex-col gap-y-[50px]'>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcHome/></span>
                                <Link to='hero' smooth={true} offset={-150} onClick={() => handleMenuClose()}>Home</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcInfo/></span>
                                <Link to='about' smooth={true} offset={-150} onClick={() => handleMenuClose()}>About Us</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcCloth/></span>
                                <Link to='info' smooth={true} offset={-150} onClick={() => handleMenuClose()}>Event Informations</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcFilm/></span>
                                <Link to='buyTicket' smooth={true} offset={-150} onClick={() => handleMenuClose()}>Purchase Ticket</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-[#f29435] text-xl'><HiSparkles/></span>
                                <Link to='highlight' smooth={true} offset={-150} onClick={() => handleMenuClose()}>Highlights</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcShop/></span>
                                <Link to='vendorDetails' smooth={true} offset={-150} onClick={() => handleMenuClose()}>Become a vendor</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-xl'><FcFeedback/></span>
                                <Link>Subscribe to our newsletter</Link>
                            </li>
                            <li className='focus:text-[#236e45] flex items-center gap-1.5 border-b pl-2 hover:border-[#236e45]'>
                                <span className='text-blue-500 text-xl'><CiTwitter/></span>
                                <Link>Connect with us on Twitter</Link>
                            </li>
                        </ul>
                    </div>
            </section>

            </div>
        )}
    </div>
  )
}

export default Menu
