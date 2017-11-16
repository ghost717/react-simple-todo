import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import App from './components/Main';
import About from './components/About';

// Render the main component into the dom
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));



/*

<Router history={browserHistory}>
    <Route path="/" component={App} />
    <Route path="/about" component={About} />
</Router>

import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

// Render the main component into the dom
ReactDOM.render(<App />, document.getElementById('app'));
*/