// // client/src/components/App.js
// import React from 'react';
// import GlobalStyle from './globalStyles';
// import { useState, useEffect } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
// function App() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     fetch('/hello')
//       .then((r) => r.json())
//       .then((data) => setCount(data.count));
//   }, []);

//   return (
//     <BrowserRouter>
//       <GlobalStyle />
//       <Switch>
//         <Route path='/' exact component={Home} />
//       </Switch>
//     </BrowserRouter>
//   );
// }

// export default App;
// client/src/components/App.js
import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/hello')
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route path='/testing'>
            <h1>Test Route</h1>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
