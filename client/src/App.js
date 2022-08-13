import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';
import { parseISO, format } from 'date-fns';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [destination_sets, setDestinationSets] = useState([]);
  const [errors, setErrors] = useState(false);
  const [user, setUser] = useState(null);

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
        res.json().then(setDestinations);
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  useEffect(() => {
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
          summary1: format(parseISO(d.most_recent_test), 'MM/dd/yyyy'),
          summary2: `${d.total_tests} tests`,
          image: d.image,
        };
      });
    let arraryOfDestinations = [
      { data: wifi_sort, title: 'Best Wifi' },
      { data: cell_coverage, title: 'Best Cell Coverage' },
      { data: rating_sort, title: 'Top Rated' },
      { data: most_recent_test, title: 'Recently Visited' },
    ];
    setDestinationSets(arraryOfDestinations);
  }, [destinations]);

  if (errors) return <h1>{errors}</h1>;
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navbar user={user} />
      <Switch>
        <Route exact path='/userlogin'>
          <Login onLogin={setUser} user={user} />
        </Route>
        <Route exact path='/'>
          <Home destination_sets={destination_sets} user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
