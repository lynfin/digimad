import React from 'react';
import Hero from '../components/Hero/Hero';
import Carousel from '../components/Carousel/Carousel';

function Home({ destination_sets, user, onDestinationSelected, destinations }) {
  const destinationCardStyles = [
    {
      data: {
        summary1: 'maximum_wifi',
        summary1Units: 'Max Mbps',
        summary2: 'total_tests',
        summary2Units: 'tests',
      },
      sortField: 'maximum_wifi',
      title: 'Best Wifi',
    },
    {
      data: {
        summary1: 'fastest_cell_download',
        summary1Type: 'float',
        summary1Units: 'Max Mbps',
        summary2: 'fastest_cell_provider',
      },
      sortField: 'fastest_cell_download',
      title: 'Best Cell Coverage',
    },
    {
      data: {
        summary1: 'average_tech_rating',
        summary1Type: 'float',
        summary1Units: 'Average Rating',
        summary2: 'total_visits',
        summary2Units: 'visits',
      },
      sortField: 'average_tech_rating',
      title: 'Top Rated',
    },
    {
      data: {
        summary1: 'most_recent_test',
        summary1Type: 'date',
        summary2: 'total_tests',
        summary2Units: 'tests',
      },
      sortField: 'most_recent_test',
      title: 'Recently Visited',
    },
  ];
  // add sort to data={destinations} once the rest is working
  return (
    <>
      <Hero />
      {destinationCardStyles.map((cardStyle, index) => (
        <Carousel
          key={index}
          data={[...destinations].sort((a, b) =>
            a[cardStyle.sortField] > b[cardStyle.sortField] ? -1 : 1
          )}
          title={cardStyle.title}
          cardStyle={cardStyle.data}
          onDestinationSelected={onDestinationSelected}
        />
      ))}
      {/* {destination_sets.map((destination, index) => (
        <Carousel
          key={index}
          data={destination.data}
          title={destination.title}
          onDestinationSelected={onDestinationSelected}
        />
      ))} */}
    </>
  );
}

export default Home;
