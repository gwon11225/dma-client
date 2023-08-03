import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const isLogged = false;

function reducer(state = isLogged, action) {
  if (action.type === 'logout') {
    state = false;
    return state;
  } else if (action.type === 'login') {
    state = true;
    return state;
  } else {
    return state;
  }
}

let store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
