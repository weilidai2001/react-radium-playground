import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configure-store';
import '../sass/main.scss';
import {Router, browserHistory} from 'react-router';

import {loadProperties} from './actions/property-actions';

import '../node_modules/toastr/build/toastr.min.css';

const store = configureStore();
store.dispatch(loadProperties());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
