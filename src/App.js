import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component /home';
import Startups from './component /startups';
import Register from './component /register';
import Login from './component /login'


function App() {
  return (
    <Router>
      <div>
      

          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/startups" component={Startups} />
          <Route exact={true} path="/register" component={Register} />
          <Route exact={true} path="/login" component={Login} />

      </div>
    </Router>
  );
}

export default App;
