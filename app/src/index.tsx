import React from 'react';
import 'react-app-polyfill/ie11';
import ReactDOM from 'react-dom';
import {HelmetProvider} from 'react-helmet-async';
import {App} from './App';
import './errorReporting';
import './i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
