import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  const [destinations, setDestinations] = useState([]);
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
  console.log('user is ');
  console.log(user);
  useEffect(() => {
    fetch('/destinations').then((res) => {
      if (res.ok) {
        res.json().then(setDestinations);
      } else {
        res.json().then((data) => setErrors(data.error));
      }
    });
  }, []);

  if (errors) return <h1>{errors}</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/testing'>
          <h1>Test Route</h1>
        </Route>
        <Route exact path='/userlogin'>
          <Login onLogin={setUser} />
        </Route>
        <Route exact path='/'>
          <Home destinations={destinations} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
