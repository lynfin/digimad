import React from 'react';
import Hero from '../components/Hero/Hero';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import Carousel from '../components/Carousel/Carousel';

function Home({ destinations, user }) {
  return (
    <>
      <Hero />
      <Carousel data={destinations} title='Best Wifi' />
      <Carousel data={destinations} title='Best Cell Coverage' />
      <Carousel data={destinations} title='Top Rated' />
      <Carousel data={destinations} title='Recently Visited' />
    </>
  );
}

export default Home;
