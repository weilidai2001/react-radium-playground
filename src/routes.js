import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './App.js';
import PropertyEditPage from './components/properties/property-edit-page'
import PropertiesPage from './components/properties/properties-page'

export default (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="operations/properties" component={PropertiesPage} />
    <Route path="operations/properties/:id" component={PropertyEditPage} />
  </Route>
);