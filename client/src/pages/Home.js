import React from 'react';
import Hero from '../components/Hero/Hero';
import Carousel from '../components/Carousel/Carousel';

function Home({ destinations }) {
  return (
    <>
      <Hero />
      <Carousel data={destinations} />
    </>
  );
}

export default Home;
