import React from 'react';
import { Link } from 'react-router-dom';
import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import Highlights from './festival-highlights/Highlights';
import TicketInfo from './ticket-informations/TicketInfo';
import VendorDetails from '../vendor-application/VendorDetails';


const LandingPage = () => {
  return (
    <div className=''>
      {/* This is the first slide */}
      <div>
        <FirstSlide />
      </div>
      {/* This Is the second Slide */}
      <div>
        <SecondSlide />
      </div>
      <Highlights/>
      <TicketInfo/>
      <VendorDetails/>
    </div>
  )
}

export default LandingPage
