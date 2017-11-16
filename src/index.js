import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import Main from './components/Main';
import About from './components/About';

const Schedule = () => (
  <div>
    <ul>
      <li>6/5 @ Evergreens</li>
      <li>6/8 vs Kickers</li>
      <li>6/14 @ United</li>
    </ul>
  </div>
)

const Content = () => (
  <content>
    <Switch>
      <Route exact path='/' component={Main}/>
      <Route path='/about' component={About}/>
      <Route path='/schedule' component={Schedule}/>
    </Switch>
  </content>
)

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>about</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
      </ul>
    </nav>
  </header>
)

const App = () => (
  <div>
  	<Header />
    <Content />
  </div>
)

// Render the main component into the dom
ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('app'));
