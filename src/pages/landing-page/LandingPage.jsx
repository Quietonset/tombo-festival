import React from 'react';
import { Link } from 'react-router-dom';
import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import Highlights from './festival-highlights/Highlights';
import TicketInfo from './ticket-informations/TicketInfo';
import Subscription from './subscription/Subscription';


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
      <Subscription/>

    </div>
  )
}

export default LandingPage
