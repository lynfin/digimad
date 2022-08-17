import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Destination from './pages/Destination';
import Speedtest from './pages/Speedtest';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { parseISO, format, endOfDay } from 'date-fns';
import { CgOpenCollective } from 'react-icons/cg';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  //const [destination_sets, setDestinationSets] = useState([]);
  const [errors, setErrors] = useState(false);
  const [user, setUser] = useState(null);
  //const [selectedDestinationId, setSelectedDestinationId] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    // auto-login
    fetch('/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/destinations').then((res) => {
      if (res.ok) {
        res.json().then((d) => setDestinations(d));
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  // inspired by https://stackoverflow.com/questions/44672209/react-count-object-properties-in-an-array
  useEffect(() => {
    if (destinations.length) {
      const countries = destinations
        .map((dest) => dest.address.country)
        .filter((country, index, array) => array.indexOf(country) === index); // build array of distinct countries

      const countryCounts = countries.map((country) => ({
        country: country,
        count: destinations.filter((item) => item.address.country === country) // record country and count of occurrences
          .length,
        cities: destinations
          .filter((item) => item.address.country === country)
          .map((dest) => dest.address.city)
          .filter((city, index, array) => array.indexOf(city) === index) // build array of cities in each country
          .map((city, i) => ({
            name: city,
            code: i,
            count: destinations.filter(
              (item) =>
                item.address.country === country && item.address.city === city // record city and count of occurrences
            ).length,
          })),
      }));
      setLocations(countryCounts);
    }
  }, [destinations]);

  console.log(locations);
  useEffect(() => {
    if (user)
      fetch('/favorites').then((res) => {
        if (res.ok) {
          res.json().then((d) => {
            setFavorites(d ? d.map((fav) => fav.destination_id) : []);
          });
        } else {
          //res.json().then((data) => setErrors(data.error));
          setFavorites([]);
        }
      });
    else setFavorites([]);
  }, [user]);
  console.log(user ? user.username : 'no one logged in');
  console.log(favorites.length);
  console.log(favorites);

  // useEffect(() => {
  //   // TODO: create basic map, then add the more detailed info?
  //   // Build once with all the info, then rename appropriate entry to summary1/summary2
  //   let wifi_sort = destinations
  //     .sort((a, b) => (a['maximum_wifi'] > b['maximum_wifi'] ? -1 : 1))
  //     .map((d) => {
  //       return {
  //         header: d.name,
  //         location: `${d.address.city}, ${d.address.country}`,
  //         summary1: `${d.maximum_wifi} Max Mbps`,
  //         summary2: `${d.total_tests} tests`,
  //         image: d.image,
  //         id: d.id,
  //       };
  //     });
  //   let rating_sort = destinations
  //     .sort((a, b) => (a.average_tech_rating > b.average_tech_rating ? -1 : 1))
  //     .map((d) => {
  //       return {
  //         header: d.name,
  //         location: `${d.address.city}, ${d.address.country}`,
  //         summary1: `${parseFloat(d.average_tech_rating).toFixed(
  //           2
  //         )} Average Rating`,
  //         summary2: `${d.total_visits} visits`,
  //         image: d.image,
  //         id: d.id,
  //       };
  //     });
  //   let cell_coverage = destinations
  //     .sort((a, b) =>
  //       a.provider_fastest_cellular_download[1] >
  //       b.provider_fastest_cellular_download[1]
  //         ? -1
  //         : 1
  //     )
  //     .map((d) => {
  //       return {
  //         header: d.name,
  //         location: `${d.address.city}, ${d.address.country}`,
  //         summary1: `${parseFloat(
  //           d.provider_fastest_cellular_download[1]
  //         ).toFixed(2)} Mbps`,
  //         summary2: d.provider_fastest_cellular_download[0],
  //         image: d.image,
  //         id: d.id,
  //       };
  //     });
  //   let most_recent_test = destinations
  //     .sort((a, b) => (a.most_recent_test > b.most_recent_test ? -1 : 1))
  //     .map((d) => {
  //       return {
  //         header: d.name,
  //         location: `${d.address.city}, ${d.address.country}`,
  //         summary1: format(parseISO(d.most_recent_test), 'MM/dd/yyyy'),
  //         summary2: `${d.total_tests} tests`,
  //         image: d.image,
  //         id: d.id,
  //       };
  //     });
  //   let arraryOfDestinations = [
  //     { data: wifi_sort, title: 'Best Wifi' },
  //     { data: cell_coverage, title: 'Best Cell Coverage' },
  //     { data: rating_sort, title: 'Top Rated' },
  //     { data: most_recent_test, title: 'Recently Visited' },
  //   ];
  //   setDestinationSets(arraryOfDestinations);
  // }, [destinations]);

  if (errors) return <h1>{errors}</h1>;

  function handleDestinationSelected(selectedId) {
    //setSelectedDestinationId(selectedId);
    setSelectedDestination(
      destinations.find((d) => {
        return d.id === selectedId;
      })
    );
  }

  function handleFavoriteSelected(selectedId, isFavorite) {
    let updatedFavorites = isFavorite
      ? setFavorites((oldFavorites) => [...oldFavorites, selectedId])
      : setFavorites((oldFavorites) =>
          oldFavorites.filter((f) => {
            return f !== selectedId;
          })
        );
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar user={user} />
      <Switch>
        <Route exact path='/userlogin'>
          <Login onLogin={setUser} user={user} />
        </Route>
        <Route exact path='/'>
          <Home
            user={user}
            onDestinationSelected={handleDestinationSelected}
            destinations={destinations}
            favorites={favorites}
            onFavoriteSelected={handleFavoriteSelected}
            locations={locations}
          />
        </Route>
        <Route exact path='/destination'>
          <Destination user={user} selectedDestination={selectedDestination} />
        </Route>
        <Route exact path='/speedtest'>
          <Speedtest user={user} selectedDestination={selectedDestination} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
