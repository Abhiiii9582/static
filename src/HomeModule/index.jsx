import React from 'react'
import MainSlider from './Component/MainSlider/MainSlider'
import ServiceHeading from './Component/ServiceHeading/ServiceHeading'
import AboutSection from './Component/AboutSection/AboutSection'
import ServiceSection from './Component/ServiceSection/ServiceSection'
import GallarySection from './Component/GallarySection/GallarySection'
import WhyUs from './Component/WhyUs/WhyUs'
import Testimonials from './Component/Testimonials/Testimonials'
import HomeContact from './Component/HomeContactSection/HomeContact'


const HomePage = () => {
  return (
    <>
      <MainSlider />
      <ServiceHeading />
      <AboutSection button={true} />
      <ServiceSection />
      <GallarySection />
      <WhyUs contactBtn={true} />
      <HomeContact />
      <Testimonials />
    </>
  );
}

export default HomePage
