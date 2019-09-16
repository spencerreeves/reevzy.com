import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import rootReducer from './state/reducers'
import './index.css';

const initialState = {
  scrollIndex: 1,
};

const store = createStore(rootReducer, initialState);

//TODO: Clean up the rest of the app
//const unsubscribe = store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
