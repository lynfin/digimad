import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0);
  const [destinations, setDestinations] = useState([]);
  const [errors, setErrors] = useState(false);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
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

  if (errors) return <h1>{errors}</h1>;
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/testing'>
          <h1>Test Route</h1>
        </Route>
        <Route path='/'>
          <Home destinations={destinations} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
