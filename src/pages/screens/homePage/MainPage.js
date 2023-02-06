import React from 'react';
import FooterPart from '../../includes/Footer';
import Header from '../../includes/Header';
import Banner from './Banner';
import BannerBottom from './BannerBottom';
import FinancialService from './FinancialService';
import OurCompany from './OurCompany';
import Partners from './Partners';
import RequestCall from './RequestCall';
import SayAbout from './SayAbout';
import Solutions from './Solutions';

const MainPage = () => {
  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />
      <FinancialService />
      <Solutions />
      <OurCompany />
      <SayAbout />
      <RequestCall />
      <Partners />
      <FooterPart />
    </>
  );
};

export default MainPage;
