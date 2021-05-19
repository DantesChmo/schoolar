import * as React from 'react';
import {hydrate} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {App} from './App';

const root = document.getElementById('root')!;
const history = createBrowserHistory();

hydrate(
  (
    <Router>
      <App />
    </Router>
  ),
  root
);
