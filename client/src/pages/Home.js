import React from 'react';
import Hero from '../components/Hero/Hero';
import Carousel from '../components/Carousel/Carousel';
import { parseISO, format } from 'date-fns';

function Home({ destination_sets, user }) {
  return (
    <>
      <Hero />
      {destination_sets.map((destination, index) => (
        <Carousel
          key={index}
          data={destination.data}
          title={destination.title}
        />
      ))}
    </>
  );
}

export default Home;
