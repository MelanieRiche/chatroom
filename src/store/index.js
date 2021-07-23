/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';

import reducer from 'src/reducers';
import ajax from 'src/middlewares/ajax';
import socket from 'src/middlewares/socket';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(
    // debug,
    ajax,
    socket,
  ),
));

export default store;
