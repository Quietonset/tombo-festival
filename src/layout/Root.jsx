import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/nav-section/Navbar';
import Footer from '../components/footer-section/Footer';
import Menu from '../components/Menu';

const Root = () => {
  return (
    <div>
        <Navbar/>
        <Menu/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Root;
