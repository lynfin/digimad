import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import GlobalStyle from './globalStyles';
import Navbar from './components/Navbar/Navbar';

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
      <GlobalStyle />
      <Navbar user={user} />
      <Switch>
        <Route exact path='/userlogin'>
          <Login onLogin={setUser} user={user} />
        </Route>
        <Route exact path='/'>
          <Home destinations={destinations} user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
