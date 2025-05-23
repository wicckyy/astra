import React from 'react';
import { Stack } from '@mantine/core';
import HeaderComponent from './components/HeaderComponent';
import HeroSection from './components/HeroSection';
import AboutUsSection from './components/AboutUsSection';
import ServicesSection from './components/ServicesSection';
import ContactUsSection from './components/ContactUsSection';
import FooterComponent from './components/FooterComponent';

const LandingPage: React.FC = () => {
  return (
    <Stack spacing="xl">
      <HeaderComponent />
      <HeroSection />
      <AboutUsSection />
      <ServicesSection />
      <ContactUsSection />
      <FooterComponent />
    </Stack>
  );
};

export default LandingPage;
