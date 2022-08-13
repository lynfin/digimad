import React from 'react';
import Hero from '../components/Hero/Hero';
import ProfileForm from '../components/ProfileForm/ProfileForm';
import Carousel from '../components/Carousel/Carousel';

function Home({ destinations, user }) {
  let mod = destinations.map((d) => {
    return {
      header: d.name,
      location: `${d.address.city}, ${d.address.country}`,
      summary1: `${d.maximum_wifi} Max Mbps`,
      summary2: `${d.total_tests} tests`,
      image: d.image,
    };
  });

  let wifi_sort = destinations
    .sort((a, b) => (a.maximum_wifi > b.maximum_wifi ? -1 : 1))
    .map((d) => {
      return {
        header: d.name,
        location: `${d.address.city}, ${d.address.country}`,
        summary1: `${d.maximum_wifi} Max Mbps`,
        summary2: `${d.total_tests} tests`,
        image: d.image,
      };
    });
  let rating_sort = destinations
    .sort((a, b) => (a.average_tech_rating > b.average_tech_rating ? -1 : 1))
    .map((d) => {
      return {
        header: d.name,
        location: `${d.address.city}, ${d.address.country}`,
        summary1: `${parseFloat(d.average_tech_rating).toFixed(
          2
        )} Average Rating`,
        summary2: `${d.total_visits} visits`,
        image: d.image,
      };
    });
  let cell_coverage = destinations
    .sort((a, b) =>
      a.provider_fastest_cellular_download[1] >
      b.provider_fastest_cellular_download[1]
        ? -1
        : 1
    )
    .map((d) => {
      return {
        header: d.name,
        location: `${d.address.city}, ${d.address.country}`,
        summary1: `${parseFloat(
          d.provider_fastest_cellular_download[1]
        ).toFixed(2)} Mbps`,
        summary2: d.provider_fastest_cellular_download[0],
        image: d.image,
      };
    });
  let most_recent_test = destinations
    .sort((a, b) => (a.most_recent_test > b.most_recent_test ? -1 : 1))
    .map((d) => {
      return {
        header: d.name,
        location: `${d.address.city}, ${d.address.country}`,
        summary1: d.most_recent_test,
        summary2: '',
        image: d.image,
      };
    });
  return (
    <>
      <Hero />
      <Carousel data={wifi_sort} title='Best Wifi' />
      <Carousel data={cell_coverage} title='Best Cell Coverage' />
      <Carousel data={rating_sort} title='Top Rated' />
      <Carousel data={most_recent_test} title='Recently Visited' />
    </>
  );
}

export default Home;
