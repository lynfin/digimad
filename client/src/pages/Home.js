import React from 'react';
import Hero from '../components/Hero/Hero';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import Carousel from '../components/Carousel/Carousel';

function Home({ destinations, user }) {
  return (
    <>
      <Hero />
      <Carousel data={destinations} />
    </>
  );
}

export default Home;
