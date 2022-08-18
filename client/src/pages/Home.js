import React, { useEffect, useState } from 'react';
import Hero from '../components/Hero/Hero';
import Filters from '../components/Filters/Filters';
import Carousel from '../components/Carousel/Carousel';

function Home({
  user,
  onDestinationSelected,
  destinations,
  favorites,
  onFavoriteSelected,
  locations,
}) {
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [filteredDestinations, setFilteredDestinations] =
    useState(destinations);

  useEffect(() => {
    setFilteredDestinations(
      selectedCountry && selectedCountry !== 'All'
        ? destinations.filter((d) => {
            return d.address.country === selectedCountry;
          })
        : destinations
    );
  }, [destinations, selectedCountry]);

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
      title: 'Most Recent Tests',
    },
  ];
  const favoritesData = {
    summary1: 'maximum_wifi',
    summary1Units: 'Max Mbps',
    summary2: 'total_tests',
    summary2Units: 'tests',
  };
  const favoriteDestinations = filteredDestinations.filter((destination) =>
    favorites.includes(destination.id)
  );

  return (
    <>
      <Hero />
      <Filters
        locations={locations}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
      />
      {favorites.length > 0 ? (
        <Carousel
          data={[...favoriteDestinations].sort((a, b) =>
            a['name'] > b['name'] ? 1 : -1
          )}
          title='Favorites'
          cardStyle={favoritesData}
          onDestinationSelected={onDestinationSelected}
          favorites={favorites}
          onFavoriteSelected={onFavoriteSelected}
          user={user}
        />
      ) : null}
      {destinationCardStyles.map((cardStyle, index) => (
        <Carousel
          key={index}
          data={[...filteredDestinations].sort((a, b) =>
            a[cardStyle.sortField] > b[cardStyle.sortField] ? -1 : 1
          )}
          title={cardStyle.title}
          cardStyle={cardStyle.data}
          onDestinationSelected={onDestinationSelected}
          favorites={favorites}
          onFavoriteSelected={onFavoriteSelected}
          user={user}
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
