import React from 'react'
import logo from '../../assets/images/TomboLogo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to='/'>
      <img src={logo} alt="Tombo Festival 2024" className='h-20 object-cover'/>
    </Link>
  )
}

export default Logo
