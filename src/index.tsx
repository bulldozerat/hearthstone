import 'react-app-polyfill/ie9';
import 'react-app-polyfill/ie11';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import FetchAllCards from './store/FetchAllCardsStore';
import SearchSingleCard from './store/SearchSingleCardStore';

const stores = {
  FetchAllCards,
  SearchSingleCard,
};

const num = 1;

ReactDOM.render(  
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
