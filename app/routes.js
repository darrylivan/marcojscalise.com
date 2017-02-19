import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import Home from './containers/Home';
import CriminalLaw from './components/CriminalLaw';
import FamilyLaw from './components/FamilyLaw';
import Contact from './components/Contact';
import About from './components/About';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/criminalLaw" component={CriminalLaw}/>
      <Route path="/familyLaw" component={FamilyLaw}/>
      <Route path="/contact" component={Contact}/>
  </Route>
);
