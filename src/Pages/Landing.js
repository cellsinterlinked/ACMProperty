import React from 'react'

import LandingVideo from '../Components/Visuals/LandingVideo'
import Welcome from '../Components/Welcome';
import Reasons from '../Components/Reaons';
import NavBar from '../Components/Nav/Navbar';
import Glimpse from '../Components/Glimpse';
import Reviews from '../Components/Reviews/Reviews';
import Areas from '../Components/Areas/Areas';
import Footer from '../Components/Nav/Footer';
import PreFooter from '../Components/Nav/PreFooter';



function Landing () {



    return(
        <>
 
        <LandingVideo />
        <Welcome />
       <Reasons />
       <Glimpse />
       <Reviews />
       <Areas />
       <PreFooter />

        </>
    )
}

export default Landing;