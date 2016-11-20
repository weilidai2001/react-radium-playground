import React from 'react';
import {Route, IndexRoute } from 'react-router';
import Homepage from './pages/homepage';
import PropertyEditPage from './components/properties/property-edit-page'
import PropertiesPage from './components/properties/properties-page'
import AboutPage from './pages/about'
import JoinUsPage from './pages/join'

export default (
  <Route path="/">
    <IndexRoute component={Homepage} />
    <Route path="about" component={AboutPage} />
    <Route path="join" component={JoinUsPage} />
    <Route path="operations/properties" component={PropertiesPage} />
    <Route path="operations/properties/:id" component={PropertyEditPage} />
  </Route>
);