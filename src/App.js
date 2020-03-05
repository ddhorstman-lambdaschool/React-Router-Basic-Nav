import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { Route, Switch } from "react-router-dom";
const App = () => (
  <div>
    <Navigation />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </div>
);

export default App;
