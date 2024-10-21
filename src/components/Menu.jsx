import React, { useContext } from 'react';
// import menu context
import { MenuContext } from '../context/MenuContext';
import { Link } from 'react-router-dom';

const Menu = () => {
    // menu context
    const { isClicked, handleMenuClose } = useContext(MenuContext);

    return (
    <div>
        {isClicked && (
            <div onClick={() => handleMenuClose()} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                <section className={`${isClicked ? 'translate-x-0' : 'translate-x-[-100%]'} h-screen s:w-[75%] sm:w-[75%] md:w-[75%] lg:w-[300px] xl:max-w-[300px] fixed top-0 right-0 bg-[#f7faf9] z-20 transition-all duration-200 transform shadow-2xl`}>
                <div className=''>
                    <Link to={'/'} className='hover:text-[#236e45]'>Home</Link>
                    <Link to={''} className='hover:text-[#236e45]'>About</Link>
                    <Link to={''} className='hover:text-[#236e45]'>Highlights</Link>
                    <Link to={''} className='hover:text-[#236e45]'>Buy a Ticket</Link>
                </div>
            </section>

            </div>
        )}
    </div>
  )
}

export default Menu
