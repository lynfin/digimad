import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Destination from './pages/Destination';
import AboutSite from './pages/AboutSite';
import Speedtest from './pages/Speedtest';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [errors, setErrors] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState(null);
  const [locations, setLocations] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

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
        res.json().then((d) => {
          setDestinations(
            d.map((dest) => {
              return {
                ...dest,
                average_tech_rating: +dest.average_tech_rating,
                fastest_cell_download: +dest.fastest_cell_download,
                maximum_wifi: +dest.maximum_wifi,
              };
            })
          );
        });
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
            code: i.toString(),
            count: destinations.filter(
              (item) =>
                item.address.country === country && item.address.city === city // record city and count of occurrences
            ).length,
          })),
      }));
      setLocations(countryCounts);
    }
  }, [destinations]);

  useEffect(() => {
    if (user)
      fetch('/favorites').then((res) => {
        if (res.ok) {
          res.json().then((d) => {
            setFavorites(d ? d.map((fav) => fav.destination_id) : []);
          });
        } else {
          setFavorites([]);
        }
      });
    else setFavorites([]);
  }, [user]);

  if (errors) return <h1>{errors}</h1>;

  function onDestinationUpdated(destinationId) {
    fetch(`/destinations/${destinationId}`).then((res) => {
      if (res.ok) {
        res.json().then((dest) => {
          const updatedDestination = {
            ...dest,
            average_tech_rating: +dest.average_tech_rating,
            fastest_cell_download: +dest.fastest_cell_download,
            maximum_wifi: +dest.maximum_wifi,
          };

          setDestinations((curDestinations) => {
            return curDestinations.map((d) => {
              return d.id === destinationId ? updatedDestination : d;
            });
          });
        });
      } else {
        res.json().then((data) => console.log(data.error));
      }
    });
  }

  function handleDestinationSelected(selectedId) {
    //setSelectedDestinationId(selectedId);
    setSelectedDestination(
      destinations.find((d) => {
        return d.id === selectedId;
      })
    );
  }

  function handleFavoriteSelected(selectedId, isFavorite) {
    isFavorite
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
            selectedCountry={selectedCountry}
            selectedCity={selectedCity}
            selectedCategory={selectedCategory}
            setSelectedCountry={setSelectedCountry}
            setSelectedCity={setSelectedCity}
            setSelectedCategory={setSelectedCategory}
          />
        </Route>
        <Route exact path='/destination'>
          <Destination user={user} selectedDestination={selectedDestination} />
        </Route>
        <Route exact path='/speedtest'>
          <Speedtest
            user={user}
            selectedDestination={selectedDestination}
            onDestinationUpdated={onDestinationUpdated}
          />
        </Route>
        <Route exact path='/about'>
          <AboutSite />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
