import React from 'react';
import {Route, IndexRoute } from 'react-router';
import App from './App.js';
import PropertyEditPage from './components/properties/property-edit-page'

export default (
  <Route path="/">
    <IndexRoute component={App} />
    <Route path="operations/properties" component={PropertyEditPage} />
    <Route path="operations/properties/:id" component={PropertyEditPage} />
  </Route>
);