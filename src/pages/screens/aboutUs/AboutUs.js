import React from 'react'
import Header from '../../includes/Header'
import AboutBanner from './AboutBanner'
import AboutOurCompany from './AboutOurCompany'
import OurSolutions from './OurSolutions'
import OurTeamMembers from './OurTeamMembers'
import WhatTheySay from './WhatTheySay'
import FooterPart from '../../includes/Footer'

const AboutUs = () => {
  return (
    <>
     <Header />
     <AboutBanner />
     <AboutOurCompany />
     <OurTeamMembers />
     <OurSolutions />
     <WhatTheySay />
     <FooterPart />
    </>
  )
}

export default AboutUs
