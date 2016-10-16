import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import routes from './routes';
import configureStore from './store/configure-store';
import '../sass/main.scss';
import {Router, browserHistory} from 'react-router';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
