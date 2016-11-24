import React from 'react';
import ReactDOM from 'react-dom';
// provider for pass state to props
import { Provider } from 'react-redux';

import { createStore } from 'redux'

import reducer from './redux/reducer'

import App from './App';

let store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));
