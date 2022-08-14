import React from 'react';
import Hero from '../components/Hero/Hero';
import Carousel from '../components/Carousel/Carousel';

function Home({ destination_sets, user, onDestinationSelected }) {
  return (
    <>
      <Hero />
      {destination_sets.map((destination, index) => (
        <Carousel
          key={index}
          data={destination.data}
          title={destination.title}
          onDestinationSelected={onDestinationSelected}
        />
      ))}
    </>
  );
}

export default Home;
