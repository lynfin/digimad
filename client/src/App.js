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

  // Believe I need to convert string values to numerics here, so sort of 90 < 120
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
          //res.json().then((data) => setErrors(data.error));
          setFavorites([]);
        }
      });
    else setFavorites([]);
  }, [user]);

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
